import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { regret } = await request.json();

    if (!regret || typeof regret !== "string") {
      return NextResponse.json(
        { error: "Invalid regret input" },
        { status: 400 }
      );
    }

    // Handle very short or vague inputs without API call
    const wordCount = regret.trim().split(/\s+/).length;
    if (wordCount < 10) {
      return NextResponse.json({
        whatWentWrong: "It's hard to see the full picture from what you've shared. Sometimes the weight of a regret makes it difficult to put into words, or maybe you're still figuring out what happened.",
        lessonLearned: "When something feels too big or too unclear to describe, that's often a sign it needs more time. Sitting with it—without forcing clarity—can help you understand what you're really feeling.",
        betterFuture: "When you're ready to look closer, the details will come. For now, knowing that something matters enough to revisit is already a step forward.",
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const prompt = `You are a calm, reflective guide helping someone understand their regret.

Analyze the user's regret and return ONLY a valid JSON object with this exact structure:
{
  "whatWentWrong": "2-3 sentences. Factual, non-judgmental observation of what happened.",
  "lessonLearned": "2-3 sentences. Practical insight they can carry forward. Human and grounded.",
  "betterFuture": "2-3 sentences. Realistic hope about how this understanding changes things. No motivational fluff."
}

Tone: Calm, reflective, human. No clichés. No toxic positivity. No "everything happens for a reason."
Be honest but kind. Acknowledge pain without dwelling. Focus on understanding, not fixing.


User's regret:
${regret}

Return only the JSON object, nothing else.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024,
          }
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Gemini API error:", response.status, errorData);
      throw new Error(`Gemini API error: ${response.statusText}`);
    }

    const data = await response.json();
    
    const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!textResponse) {
      return NextResponse.json(
        { error: "Empty AI response" },
        { status: 502 }
      );
    }

    // Try direct parse first
    let analysis;
    try {
      analysis = JSON.parse(textResponse);
    } catch {
      // Fallback: extract JSON block if Gemini added text
      const match = textResponse.match(/\{[\s\S]*\}/);
      if (!match) {
        console.error("Unparseable Gemini output:", textResponse);
        return NextResponse.json(
          { error: "AI returned invalid format. Try again." },
          { status: 502 }
        );
      }
      analysis = JSON.parse(match[0]);
    }

    return NextResponse.json(analysis);


  } catch (error) {
    console.error("Analysis error:", error);
    return NextResponse.json(
      { error: "Failed to analyze regret" },
      { status: 500 }
    );
  }
}

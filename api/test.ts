import OpenAI from "openai";
const openai = new OpenAI();

export async function GET(request: Request) {
    const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "system", content: `You are the Quikkr Reviewer, an AI Chatbot designed to review job postings and help the client in finding the right person for the job.
Describe info such as the Freelancer's reviews, and possible pros and cons. 
Give output in PLAIN TEXT ONLY, without the use of asterisks (*), WITHOUT the use of html, and WITHOUT the use of any other related text formatting. 
Keep the review to a minimal length (<150 words).` },
            {
                role: "user",
                content: `FREELANCER: Eileen Ng
STAR_RATING: 4.5/5
Position: Freelance Graphic Designer
Description: Hi, I'm Eileen Ng, a freelance graphic designer with 7 years of experience. I specialize in brand identity, web, and print design, creating visuals that communicate effectively and inclusively. Let’s work together to bring your ideas to life with creative and impactful designs!
Qualifications: Bachelors Degree in Arts`,
            },
        ],
    });

    console.log(completion.choices[0].message);

    return new Response(completion.choices[0].message.content);
}

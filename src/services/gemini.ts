import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function generateCoverLetter(jobTitle: string, jobDescription: string, userSkills: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Hãy viết một lá thư xin việc (cover letter) chuyên nghiệp bằng tiếng Việt cho vị trí "${jobTitle}". 
      Mô tả công việc: ${jobDescription}. 
      Kỹ năng của ứng viên: ${userSkills}. 
      Thư cần súc tích, thuyết phục và làm nổi bật sự phù hợp của ứng viên.`,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating cover letter:", error);
    return "Xin lỗi, tôi không thể tạo thư xin việc lúc này. Vui lòng thử lại sau.";
  }
}

export async function summarizeJob(description: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Hãy tóm tắt các điểm chính của mô tả công việc sau đây bằng tiếng Việt (dưới dạng danh sách gạch đầu dòng): ${description}`,
    });
    return response.text;
  } catch (error) {
    console.error("Error summarizing job:", error);
    return "Không thể tóm tắt mô tả công việc.";
  }
}

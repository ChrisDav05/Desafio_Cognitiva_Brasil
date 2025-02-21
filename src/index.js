import { getGeminiResponse } from "./services/geminiService.js";
import { getLlamaResponse } from "./services/llamaService.js";
import { getMixtralResponse } from "./services/mixtralService.js";

async function main() {
  const questao = "Explique sobre Programação orientada a objetos.";

  console.log("Consultando Modelos...");

  try {
    const llamaResponse = await getLlamaResponse(questao);
    const geminiResponse = await getGeminiResponse(questao);
    const mixtralResponse = await getMixtralResponse(questao);

    console.log("RESPOSTAS DE LLAMA, GEMINI E MIXTRAL:")
    console.log("\n--------------------------------------------------------------------------------");
    console.log("\nLlama retornou:", llamaResponse);
    console.log("\n--------------------------------------------------------------------------------");
    console.log("\nGemini retornou:", geminiResponse);
    console.log("\n--------------------------------------------------------------------------------");    
    console.log("\nMixtral retornou:", mixtralResponse);

  } catch (error) {
    console.error(" Erro ao obter respostas:", error);
  }
}

main();

import { db } from "./db";
import { stories, pages, type InsertStory, type InsertPage, type Story, type Page, type StoryWithPages } from "@shared/schema";
import { eq, asc } from "drizzle-orm";

export interface IStorage {
  // Stories
  getStories(): Promise<StoryWithPages[]>;
  getStory(id: number): Promise<StoryWithPages | undefined>;
  createStory(story: InsertStory): Promise<Story>;
  updateStory(id: number, updates: Partial<InsertStory>): Promise<Story>;
  deleteStory(id: number): Promise<void>;

  // Pages
  getPagesByStoryId(storyId: number): Promise<Page[]>;
  createPage(page: InsertPage): Promise<Page>;
  updatePage(id: number, updates: Partial<InsertPage>): Promise<Page>;
  deletePage(id: number): Promise<void>;
}

// Armazenamento em memória para desenvolvimento local
class MemoryStorage implements IStorage {
  private storiesData: Story[] = [];
  private pagesData: Page[] = [];
  private storyIdCounter = 1;
  private pageIdCounter = 1;

  constructor() {
    this.seedData();
  }

  private seedData() {
    // As 18 histórias com páginas separadas por conteúdo
    const storiesContent = [
      {
        title: "A Aventura do Benjamin e a Poça Misteriosa",
        description: "Uma história sobre curiosidade e cautela",
        coverImage: "/images/capa_01.png",
        pageImages: [
          "/images/img1-1.png",
          "/images/img1-2.png",
          "/images/img1-3.png",
          "/images/img1-4.png",
          "/images/img1-5.png",
          "/images/img1-6.png",
          "/images/img1-7.png",
        ],
        pages: [
          "Benjamin era um menino curioso. 🌟\n\nEle adorava correr pelo quintal depois da chuva, pular nas poças e observar tudo ao seu redor.",
          "Um dia, ele viu uma poça de água diferente perto do portão.\n\nEla brilhava como um espelho e parecia chamar:\n\n— \"Vem olhar aqui…\" ✨",
          "Benjamin chegou mais pertinho…\n\nMas então lembrou do que a mamãe sempre dizia:\n\n— \"Antes de ir, olha bem. Antes de tocar, pergunta.\" 🤔",
          "Curioso, Benjamin pegou um gravetinho e encostou na poça.\n\nPloc! 💧\n\nA água se mexeu… e ele percebeu uma coisa:\n\nA poça era funda. Muito mais funda do que parecia!",
          "Se Benjamin tivesse pulado, teria molhado toda a roupa, escorregado e se assustado.\n\nMas como ele foi devagar e pensou primeiro, ficou só com o coração batendo rápido…\n\nE um sorrisinho de alívio no rosto. 😊",
          "Então ele correu para contar para a mamãe:\n\n— \"Ainda bem que eu testei antes, né?\"\n\nA mamãe deu um abraço e disse:\n\n— \"Os exploradores inteligentes sempre olham, pensam e pedem ajuda.\" 🤗",
          "Naquele dia, Benjamin aprendeu uma coisa muito importante:\n\n✨ Nem tudo que parece brincadeira é seguro.\n\nE ser cuidadoso também é ser corajoso. 💛"
        ]
      },
      { 
        title: "Benjamin e o Cavalo do Coração Valente", 
        description: "Uma história sobre coragem e perseverança", 
        coverImage: "/images/capa_02.png", 
        pages: [
          "Benjamin tinha energia de foguete. 🚀\n\nEle corria, pulava e falava rápido — e às vezes o coração dele parecia correr junto.",
          "A mamãe e o papai pensaram numa ideia:\n\n— \"Que tal aula de equitação? Os cavalos ajudam a gente a ficar mais calmo.\" 🐴",
          "Benjamin gostou da ideia!\n\nNa primeira aula, ele ficou um pouco nervoso… mas adorou. 🌟",
          "Na terceira aula, o cavalo se assustou e Benjamin caiu.\n\nNão foi um tombo muito forte, mas foi um susto grande. 😰",
          "O professor disse com calma:\n\n— \"Cair faz parte de aprender. Os corajosos não são os que nunca caem.\n\nSão os que levantam.\" 💪",
          "Benjamin respirou fundo e disse:\n\n— \"Eu quero tentar de novo.\" 🌟",
          "Naquele dia, Benjamin aprendeu:\n\n✨ Coragem não é nunca cair.\n\nCoragem é levantar e continuar fazendo o que a gente ama. 💛"
        ]
      },
      { 
        title: "Benjamin e a Mochila das Pequenas Conquistas", 
        description: "Uma história sobre autonomia e crescimento", 
        coverImage: "/images/capa_03.png", 
        pages: [
          "Benjamin estava crescendo. 🌱\n\nUm dia, ele encontrou uma mochila azul com três bolsos:\n\n\"Eu tento\" · \"Eu consigo\" · \"Eu peço ajuda\"",
          "A mamãe explicou:\n\n— \"Essa é a mochila das pequenas conquistas.\" 🎒✨",
          "Naquela manhã, ele decidiu calçar o tênis sozinho.\n\nTentou. Desfez. Tentou de novo.\n\nE conseguiu! 👟🎉",
          "Depois, precisou de ajuda para guardar uma caixa pesada.\n\nBenjamin disse:\n\n— \"Mãe, me ajuda?\" 📦",
          "A mamãe disse:\n\n— \"Ser autônomo não é fazer tudo perfeito.\n\nÉ tentar, errar, tentar de novo…\n\ne saber pedir ajuda quando precisa.\" 💕",
          "Benjamin abraçou a mochila e dormiu com um sorriso, pronto para crescer. 💛🌙"
        ]
      },
      { 
        title: "Benjamin e o Jardim dos Caminhos Espertos", 
        description: "Uma história sobre limites e segurança", 
        coverImage: "/images/capa_04.png", 
        pages: [
          "Benjamin era curioso como um explorador. 🔍\n\nUm dia, a família foi ao Jardim dos Caminhos Espertos.",
          "Havia três portas mágicas:\n\n🟢 PODE (verde)\n🔵 PODE COM AJUDA (azul)\n🔴 AGORA NÃO (vermelha)",
          "Benjamin aprendeu que algumas coisas são seguras e ele pode fazer sozinho.\n\n✅ Como brincar no parque!",
          "Outras coisas precisam de ajuda de um adulto.\n\n🤝 Como atravessar a rua!",
          "E outras ainda não são para agora.\n\n⏰ Mas um dia vão ser!",
          "No final, ele entendeu:\n\n✨ Limites não são castigo.\n\nLimites são placas que mostram o caminho mais seguro para crescer. 💛🌈"
        ]
      },
      { 
        title: "Benjamin e o Relógio da Vez", 
        description: "Uma história sobre paciência e compartilhar", 
        coverImage: "/images/capa_05.png", 
        pages: [
          "Benjamin gostava muito de brincar. 🎮\n\nQuando ele queria um brinquedo, queria AGORA!",
          "No parquinho, ele conheceu o Relógio da Vez. ⏰\n\nO relógio ensinou:\n\n— \"Quando cada um espera a sua vez, todo mundo consegue brincar.\"",
          "Benjamin aprendeu a esperar… 🙂\n\nE a dividir seus brinquedos!",
          "A brincadeira ficou mais divertida!\n\nTodo mundo feliz! 🎉",
          "Naquele dia, ele aprendeu:\n\n✨ Esperar a vez e dividir fazem a brincadeira ficar ainda melhor. 💛"
        ]
      },
      { 
        title: "Benjamin e a Fábrica do Tempo que Quase Parou", 
        description: "Uma história sobre ajudar em casa", 
        coverImage: "/images/capa_06.png", 
        pages: [
          "Benjamin tinha muita energia! ⚡\n\nMas a casa parecia cansada…",
          "O Senhor Tempo apareceu e explicou:\n\n— \"Quando ninguém ajuda, o tempo fica cansado.\" ⏰😴",
          "Benjamin decidiu ajudar!\n\n🧸 Guardou os brinquedos\n🛏️ Arrumou o quarto",
          "A mamãe disse sorrindo:\n\n— \"Quando você ajuda, sobra tempo pra gente ficar junto.\" 💕",
          "Benjamin aprendeu:\n\n✨ Ajudar cria mais tempo para ficar com quem a gente ama. 💛⏰✨"
        ]
      },
      { 
        title: "Benjamin e Amora, Juntos no Coração", 
        description: "Uma história sobre saudade e amor", 
        coverImage: "/images/capa_07.png", 
        pages: [
          "Benjamin tinha uma cachorrinha chamada Amora. 🐶💜\n\nEles eram inseparáveis!",
          "Mas a família precisou mudar de casa.\n\nE Amora não podia ir junto. 😢",
          "A mamãe explicou:\n\n— \"O amor não vai embora quando a gente se separa.\n\nEle só muda de lugar.\" 💕",
          "Benjamin desenhou a Amora e disse:\n\n— \"Onde eu estiver, você está no meu coração.\" 🎨❤️",
          "Alguns amigos nunca deixam de seguir a gente.\n\nEles só aprendem a morar dentro do coração. 🐶💛✨"
        ]
      },
      { 
        title: "Benjamin e a Capa da Proteção", 
        description: "Uma história sobre fé e segurança", 
        coverImage: "/images/capa_08.png", 
        pages: [
          "Era hora de dormir. 🌙\n\nBenjamin perguntou:\n\n— \"Mamãe, quem cuida de mim quando eu durmo?\"",
          "A mamãe respondeu com carinho:\n\n— \"Deus cuida de você o tempo todo, meu amor.\" ✨",
          "Benjamin imaginou uma capa mágica de estrelas cobrindo sua cama. ⭐🛏️⭐",
          "Ele disse baixinho:\n\n— \"Obrigado, Papai do Céu, por cuidar de mim.\" 🙏",
          "E dormiu em paz, guardado por um amor que nunca dorme. 🌙✨💛"
        ]
      },
      { 
        title: "Benjamin e o Jardim da Paciência", 
        description: "Uma história sobre esperar com confiança", 
        coverImage: "/images/capa_09.png", 
        pages: [
          "Benjamin acordou com pressa. ⏰💨\n\nTudo parecia demorar!",
          "No Jardim da Paciência, ele viu sementes crescendo devagar… 🌱",
          "…e borboletas saindo do casulo no seu tempo. 🦋",
          "A mamãe disse:\n\n— \"Esperar não é perder tempo.\n\nÉ confiar que as coisas estão acontecendo.\" 🙂",
          "Benjamin voltou para casa mais calmo, com um pedacinho de paciência crescendo dentro dele. 🌱✨💛"
        ]
      },
      { 
        title: "Benjamin e o Segredo de Respirar Tranquilo", 
        description: "Uma história sobre acalmar a ansiedade", 
        coverImage: "/images/capa_10.png", 
        pages: [
          "Benjamin sentiu o peito um pouquinho apertado. 😟\n\nO coração batia rápido demais.",
          "A mamãe ensinou:\n\n— \"Imagina que o ar é um balão invisível.\n\nEnche devagar… 🎈\n\nE solta devagar…\"",
          "Eles respiraram juntos.\n\n🌬️ Inspira…\n🌬️ Solta…\n\nO peito foi ficando mais leve.",
          "Benjamin dormiu em paz, guardando no coração o segredo de respirar tranquilo. 🌙💙"
        ]
      },
      { 
        title: "Benjamin e o Amigo que Morava no Bolso", 
        description: "Uma história sobre amizade", 
        coverImage: "/images/capa_11.png", 
        pages: [
          "Benjamin encontrou no bolso um bichinho pequenino chamado Pipo! 🐹",
          "Pipo ensinou Benjamin a fazer amigos:\n\n— \"Amigos dividem sorrisos.\" 😊",
          "Benjamin sorriu para outros meninos.\n\nE eles sorriram de volta! 🌟",
          "Um dia, Pipo deixou um bilhete:\n\n\"Amigos de verdade moram no coração.\" 💌",
          "Benjamin aprendeu:\n\n✨ Amizade é estar junto, cuidar e convidar o outro para brincar. 💛✨"
        ]
      },
      { 
        title: "Benjamin e o Dragão que Soluçava Bolhas", 
        description: "Uma história divertida sobre ajudar os outros", 
        coverImage: "/images/capa_12.png", 
        pages: [
          "Benjamin encontrou um dragão azul!\n\nMas esse dragão soluçava bolhas de sabão! 🫧🐉",
          "— HIC! 🫧\n— HIC! 🫧🫧\n\nO dragão precisava de ajuda!",
          "Benjamin tentou dar água… 💧\nTentou fazer ele respirar fundo… 🌬️\n\nNada funcionava!",
          "Até que Benjamin fez uma careta engraçada! 🤪\n\nO dragão começou a rir!",
          "De tanto rir juntos, o soluço parou! 😂🐉\n\nO dragão voou embora feliz, deixando uma bolha em forma de coração. 🫧💛"
        ]
      },
      { 
        title: "Benjamin e o Botão do \"Agora!\"", 
        description: "Uma história sobre impulsividade", 
        coverImage: "/images/capa_13.png", 
        pages: [
          "Benjamin sentia um botão invisível dentro dele que fazia:\n\n🔴 PIIM!\n\nE transformava vontade em pressa!",
          "Mas a pressa causava bagunça:\n\n🥤 Suco derramado!\n👟 Tropeços!\n😰 Oops!",
          "Benjamin descobriu que tinha DOIS botões:\n\n🔴 Um vermelho: AGORA!\n🔵 Um azul: ESCUTA. PENSA. ESPERA.",
          "Ele começou a ouvir mais o botão azul… 🔵\n\nE o dia ficou mais calmo e seguro.",
          "Benjamin aprendeu:\n\n✨ Parar para pensar faz tudo ficar melhor! 💛"
        ]
      },
      { 
        title: "Benjamin e Maria, Minha Princesinha", 
        description: "Uma história sobre o amor de primo", 
        coverImage: "/images/capa_14.png", 
        pages: [
          "Quando Maria nasceu, Benjamin disse:\n\n— \"Ela é o meu bebezinho!\" 👶💕",
          "Eles adoravam brincar juntos!\n\nRisadas e mais risadas! 😄🎉",
          "Quando Maria ia embora, os dois sentiam saudade. 😢💔",
          "A mamãe disse:\n\n— \"Quando a gente ama alguém, esse alguém nunca vai embora de verdade.\" 💕",
          "E toda vez que se reencontravam, o abraço dizia:\n\n— \"Nunca deixamos de ser juntos.\" 🤗💛"
        ]
      },
      { 
        title: "Benjamin e o Dia em que a Sala Virou Tempestade", 
        description: "Uma história sobre comportamento na escola", 
        coverImage: "/images/capa_15.png", 
        pages: [
          "Benjamin acordou com energia de foguete! 🚀\n\nNa escola, ele não parava quieto!",
          "Ele conversou quando era hora de ouvir… 🗣️\nBrincou de lutinha na hora errada… ⚔️\nE não fez a atividade! 📝❌\n\nA sala virou tempestade! ⛈️",
          "A professora explicou com calma:\n\n— \"Quando você não escuta, todo mundo perde.\"",
          "Benjamin respirou fundo… 🌬️\nSentou… 🪑\nOuviu… 👂\nE fez a atividade! ✅",
          "Ele aprendeu:\n\n✨ Escola é lugar de aprender, respeitar e brincar — cada coisa no seu tempo. 🌈"
        ]
      },
      { 
        title: "Benjamin e a Montanha do \"Eu Consigo Sozinho\"", 
        description: "Uma história sobre pedir ajuda", 
        coverImage: "/images/capa_16.png", 
        pages: [
          "Benjamin adorava dizer:\n\n— \"Eu consigo sozinho!\" 💪",
          "Um dia, na montanha, o caminho difícil ficou muito cansativo. 🏔️😓",
          "Benjamin parou e disse:\n\n— \"Mãe, você pode me ajudar?\" 🙋",
          "A mamãe sorriu e disse:\n\n— \"Pedir ajuda também é ser forte.\" 💕",
          "Juntos, chegaram ao topo! ⛰️🎉\n\nBenjamin aprendeu que pedir ajuda faz a aventura ficar melhor. 💛"
        ]
      },
      { 
        title: "Benjamin e o Mapa do Tesouro da Família", 
        description: "Uma história sobre família", 
        coverImage: "/images/capa_17.png", 
        pages: [
          "Benjamin encontrou um mapa com X marcados pela casa! 🗺️\n\nQue aventura!",
          "Cada X tinha um bilhete sobre os tesouros de cada lugar:\n\n🛏️ No quarto: sonhos\n🍽️ Na cozinha: lanches gostosos\n🛋️ Na sala: risadas",
          "No quintal, tinha uma caixinha especial! 📦✨",
          "Dentro, um espelho e um bilhete:\n\n\"O maior tesouro é a nossa família.\" 👨‍👩‍👦💕",
          "Benjamin aprendeu que família é o tesouro que não se perde nunca. 💛🏡✨"
        ]
      },
      { 
        title: "Benjamin, Lucas e Theo e o Segredo da Floresta Quentinha", 
        description: "Uma história sobre segurança e pedir ajuda", 
        coverImage: "/images/capa_18.png", 
        pages: [
          "Benjamin, Lucas e Theo estavam brincando na floresta. 🌳🌳🌳\n\nQue dia divertido!",
          "De repente, eles viram fumaça! 💨\n\nE sentiram cheiro de queimado! 🔥",
          "Benjamin disse:\n\n— \"Quando tem fumaça, pode ser fogo!\n\nA gente NÃO chega perto.\n\nA gente vai para um lugar seguro e chama ajuda!\" 🚨",
          "Os bombeiros chegaram rápido e apagaram o fogo pequeno. 🚒👨‍🚒",
          "Benjamin completou:\n\n— \"Herói de verdade é quem sabe pedir ajuda.\" 🦸",
          "E os três voltaram a brincar, sabendo que cuidar da floresta é cuidar de todo mundo. 🌳💛"
        ]
      }
    ];

    for (const story of storiesContent) {
      const storyObj: Story = {
        id: this.storyIdCounter++,
        title: story.title,
        description: story.description,
        coverImage: story.coverImage
      };
      this.storiesData.push(storyObj);

      // Criar múltiplas páginas para cada história
      story.pages.forEach((pageContent, index) => {
        const isLastPage = index === story.pages.length - 1;
        const pageImages = (story as any).pageImages;
        const pageObj: Page = {
          id: this.pageIdCounter++,
          storyId: storyObj.id,
          pageNumber: index + 1,
          content: pageContent,
          imageUrl: pageImages ? pageImages[index] : story.coverImage,
          isFinalDrawing: isLastPage ? 1 : 0
        };
        this.pagesData.push(pageObj);
      });
    }

    const totalPages = this.pagesData.length;
    console.log(`📚 ${this.storiesData.length} histórias carregadas em memória!`);
    console.log(`📄 ${totalPages} páginas no total!`);
  }

  async getStories(): Promise<StoryWithPages[]> {
    return this.storiesData.map(story => ({
      ...story,
      pages: this.pagesData.filter(p => p.storyId === story.id)
    }));
  }

  async getStory(id: number): Promise<StoryWithPages | undefined> {
    const story = this.storiesData.find(s => s.id === id);
    if (!story) return undefined;
    return {
      ...story,
      pages: this.pagesData.filter(p => p.storyId === id).sort((a, b) => a.pageNumber - b.pageNumber)
    };
  }

  async createStory(insertStory: InsertStory): Promise<Story> {
    const story: Story = {
      id: this.storyIdCounter++,
      title: insertStory.title,
      description: insertStory.description || null,
      coverImage: insertStory.coverImage || null
    };
    this.storiesData.push(story);
    return story;
  }

  async updateStory(id: number, updates: Partial<InsertStory>): Promise<Story> {
    const idx = this.storiesData.findIndex(s => s.id === id);
    if (idx >= 0) {
      this.storiesData[idx] = { ...this.storiesData[idx], ...updates };
      return this.storiesData[idx];
    }
    throw new Error("Story not found");
  }

  async deleteStory(id: number): Promise<void> {
    this.pagesData = this.pagesData.filter(p => p.storyId !== id);
    this.storiesData = this.storiesData.filter(s => s.id !== id);
  }

  async getPagesByStoryId(storyId: number): Promise<Page[]> {
    return this.pagesData.filter(p => p.storyId === storyId).sort((a, b) => a.pageNumber - b.pageNumber);
  }

  async createPage(insertPage: InsertPage): Promise<Page> {
    const page: Page = {
      id: this.pageIdCounter++,
      storyId: insertPage.storyId,
      pageNumber: insertPage.pageNumber,
      content: insertPage.content || null,
      imageUrl: insertPage.imageUrl || null,
      isFinalDrawing: insertPage.isFinalDrawing || 0
    };
    this.pagesData.push(page);
    return page;
  }

  async updatePage(id: number, updates: Partial<InsertPage>): Promise<Page> {
    const idx = this.pagesData.findIndex(p => p.id === id);
    if (idx >= 0) {
      this.pagesData[idx] = { ...this.pagesData[idx], ...updates };
      return this.pagesData[idx];
    }
    throw new Error("Page not found");
  }

  async deletePage(id: number): Promise<void> {
    this.pagesData = this.pagesData.filter(p => p.id !== id);
  }
}

export class DatabaseStorage implements IStorage {
  async getStories(): Promise<StoryWithPages[]> {
    const allStories = await db.select().from(stories);
    const result: StoryWithPages[] = [];
    
    for (const story of allStories) {
      const storyPages = await this.getPagesByStoryId(story.id);
      result.push({ ...story, pages: storyPages });
    }
    
    return result;
  }

  async getStory(id: number): Promise<StoryWithPages | undefined> {
    const [story] = await db.select().from(stories).where(eq(stories.id, id));
    if (!story) return undefined;
    
    const storyPages = await this.getPagesByStoryId(id);
    return { ...story, pages: storyPages };
  }

  async createStory(insertStory: InsertStory): Promise<Story> {
    const [story] = await db.insert(stories).values(insertStory).returning();
    return story;
  }

  async updateStory(id: number, updates: Partial<InsertStory>): Promise<Story> {
    const [updated] = await db.update(stories)
      .set(updates)
      .where(eq(stories.id, id))
      .returning();
    return updated;
  }

  async deleteStory(id: number): Promise<void> {
    await db.delete(pages).where(eq(pages.storyId, id)); // cascade delete pages
    await db.delete(stories).where(eq(stories.id, id));
  }

  async getPagesByStoryId(storyId: number): Promise<Page[]> {
    return await db.select()
      .from(pages)
      .where(eq(pages.storyId, storyId))
      .orderBy(asc(pages.pageNumber));
  }

  async createPage(insertPage: InsertPage): Promise<Page> {
    const [page] = await db.insert(pages).values(insertPage).returning();
    return page;
  }

  async updatePage(id: number, updates: Partial<InsertPage>): Promise<Page> {
    const [updated] = await db.update(pages)
      .set(updates)
      .where(eq(pages.id, id))
      .returning();
    return updated;
  }

  async deletePage(id: number): Promise<void> {
    await db.delete(pages).where(eq(pages.id, id));
  }
}

// Usar MemoryStorage se não houver banco de dados configurado
const isMemoryMode = process.env.DATABASE_URL === 'memory' || !process.env.DATABASE_URL;
export const storage: IStorage = isMemoryMode ? new MemoryStorage() : new DatabaseStorage();

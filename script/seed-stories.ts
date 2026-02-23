/**
 * Script para popular o banco de dados com as histórias do Benjamin
 * Execute com: npx tsx script/seed-stories.ts
 */

import { db } from "../server/db";
import { stories, pages } from "../shared/schema";

// Dados das histórias extraídos do projeto original
const storiesData = [
  {
    id: 1,
    title: "A Aventura do Benjamin e a Poça Misteriosa",
    description: "Uma história sobre curiosidade e cautela - Benjamin aprende que os exploradores inteligentes sempre olham, pensam e pedem ajuda.",
    coverImage: "/images/capa_01.png",
    category: "🔍 Curiosidade e Aventura",
    content: `Benjamin era um menino curioso. Ele adorava correr pelo quintal depois da chuva, pular nas poças e observar tudo ao seu redor.

Um dia, ele viu uma poça de água diferente perto do portão. Ela brilhava como um espelho e parecia chamar: — "Vem olhar aqui…"

Benjamin chegou mais pertinho… Mas então lembrou do que a mamãe sempre dizia: — "Antes de ir, olha bem. Antes de tocar, pergunta."

Curioso, Benjamin pegou um gravetinho e encostou na poça. Ploc! A água se mexeu… e ele percebeu uma coisa: A poça era funda. Muito mais funda do que parecia.

Se Benjamin tivesse pulado, teria molhado toda a roupa, escorregado e se assustado. Mas como ele foi devagar e pensou primeiro, ficou só com o coração batendo rápido… E um sorrisinho de alívio no rosto.

Então ele correu para contar para a mamãe: — "Ainda bem que eu testei antes, né?"

A mamãe deu um abraço e disse: — "Os exploradores inteligentes sempre olham, pensam e pedem ajuda."

Naquele dia, Benjamin aprendeu uma coisa muito importante: Nem tudo que parece brincadeira é seguro. E ser cuidadoso também é ser corajoso. 💛`
  },
  {
    id: 2,
    title: "Benjamin e o Cavalo do Coração Valente",
    description: "Uma história sobre coragem e perseverança - Benjamin aprende que coragem não é nunca cair, mas levantar e continuar.",
    coverImage: "/images/capa_02.png",
    category: "😤 Emoções e Ansiedade",
    content: `Benjamin tinha energia de foguete. Ele corria, pulava e falava rápido — e às vezes o coração dele parecia correr junto.

A mamãe e o papai pensaram numa ideia: — "Que tal aula de equitação? Os cavalos ajudam a gente a ficar mais calmo."

Benjamin gostou da ideia. Ele sempre gostou de cavalos. Quando via um, os olhos dele brilhavam como sol de manhã.

Na primeira aula, ele ficou um pouco nervoso… mas adorou. Na segunda, já estava mais confiante. E na terceira… aconteceu uma coisa diferente.

O cavalo era grande e bonito. O professor estava ao lado, segurando a corda. Benjamin subiu, segurou firme e começou a andar.

De repente, o cavalo se assustou com alguma coisa e se sacudiu. Benjamin ainda não estava com as pernas tão firmes e… escorregou. E… ploft! Caiu no chão.

Não foi um tombo muito forte, mas foi um susto grande. O coração dele bateu: tum-tum-tum.

O professor perguntou: — "Você está bem?"

Ele estava. Mas ficou com vontade de chorar.

O professor disse com calma: — "Cair faz parte de aprender. Os corajosos não são os que nunca caem. São os que levantam."

Benjamin respirou fundo. Olhou para o cavalo. E disse: — "Eu quero tentar de novo."

Com ajuda, ele subiu outra vez. O cavalo andou bem devagar. E Benjamin sorriu.

Não porque estava perfeito. Mas porque não desistiu.

Só no final da aula, ele contou tudo para a mamãe, com os olhos brilhando.

Naquele dia, Benjamin aprendeu: Coragem não é nunca cair. Coragem é levantar e continuar fazendo o que a gente ama. 💛`
  },
  {
    id: 3,
    title: "Benjamin e a Mochila das Pequenas Conquistas",
    description: "Uma história sobre autonomia e crescimento - Benjamin aprende que ser autônomo é tentar, errar, tentar de novo e saber pedir ajuda.",
    coverImage: "/images/capa_03.png",
    category: "🎒 Autonomia e Organização",
    content: `Benjamin estava crescendo.

Não de um dia para o outro, mas de pouquinho em pouquinho, como quem sobe uma escada feita de passos pequenos.

Ele ainda gostava de brincar, correr e espalhar brinquedos pela casa.

Mas também começava a gostar de dizer:

— "Deixa que eu faço!"

Um dia, Benjamin encontrou uma mochila azul em cima da cama.

Ela tinha três bolsos coloridos, e em cada um havia uma etiqueta:

"Eu tento" · "Eu consigo" · "Eu peço ajuda"

Benjamin achou aquilo muito curioso.

— "Pra que será isso?"

A mamãe sentou ao lado dele e explicou com calma:

— "Essa é a mochila das pequenas conquistas. Cada vez que você tenta fazer algo sozinho, consegue, ou pede ajuda na hora certa, você pode guardar isso aqui dentro."

Benjamin abriu a mochila e imaginou que ela era uma mochila mágica, que guardava conquistas invisíveis.

Naquela manhã, ele decidiu começar com uma coisa difícil: calçar o tênis sozinho.

Ele colocou o pé. Tentou puxar o cadarço. O laço ficou torto. Ele desfez. Tentou de novo. Quase desistiu. Respirou fundo. Tentou mais uma vez. E conseguiu.

Com um sorriso enorme, ele pegou um papelzinho e escreveu (do jeitinho dele): "Tênis"

E colocou no bolso "Eu consigo".

Depois, foi hora de guardar os brinquedos do quarto. Ele começou animado, mas logo percebeu que tinha muita coisa. Uma caixa era pesada demais.

Benjamin tentou puxar. Não deu. Ele pensou um pouco e disse:

— "Mãe, me ajuda?"

Juntos, eles colocaram tudo no lugar.

Benjamin colocou outro papelzinho no bolso "Eu peço ajuda" e sentiu orgulho de ter pedido na hora certa.

Mais tarde, na cozinha, Benjamin quis abrir a própria garrafa de água. Girou. Girou. Nada. Olhou para a mamãe. Pensou em pedir ajuda. Mas decidiu tentar mais uma vez. Girou com força… Abriu!

Ele riu e colocou mais um papelzinho no bolso "Eu tento".

Quando o dia estava acabando, Benjamin sentou na cama e abriu a mochila. Lá dentro tinham vários papelzinhos. Cada um contava uma pequena história de coragem, tentativa e aprendizado.

A mamãe se sentou ao lado dele e disse:

— "Ser autônomo não é fazer tudo perfeito. É tentar, errar, tentar de novo… e saber pedir ajuda quando precisa."

Benjamin abraçou a mochila como se ela fosse um tesouro.

E antes de dormir, ele pensou:

— "Amanhã eu vou encher essa mochila com mais conquistas."

E dormiu com um sorriso, pronto para o próximo passo da sua grande aventura: crescer 💛🌙`
  },
  {
    id: 4,
    title: "Benjamin e o Jardim dos Caminhos Espertos",
    description: "Uma história sobre limites e segurança - Benjamin aprende que limites não são castigo, são placas que mostram o caminho mais seguro.",
    coverImage: "/images/capa_04.png",
    category: "🚪 Limites e Obediência",
    content: `Benjamin era curioso como um explorador.

Ele gostava de descobrir coisas novas, abrir portas e perguntar:

— "O que tem ali?"

Um dia, a família foi passear em um lugar diferente, chamado Jardim dos Caminhos Espertos.

Na entrada, tinha um portão grande com um desenho de mapa e uma frase escrita:

"Aqui você aprende a escolher o caminho certo."

Um guarda-jardim simpático apareceu e entregou a Benjamin um mapa colorido.

— "Esse jardim tem vários caminhos e algumas portas. Cada uma ensina uma coisa importante."

Benjamin ficou animado e saiu andando.

Logo, eles encontraram a primeira porta, que era verde e tinha desenhos de brinquedos. Na placa estava escrito: PODE.

Benjamin abriu e encontrou um campo cheio de bolas, pipas e jogos. Ele correu, brincou e riu bastante.

— "Essa porta é fácil!", disse ele.

O guarda-jardim explicou:

— "Algumas coisas podem, porque são seguras e fazem bem."

Depois, seguiram por um caminho de pedrinhas brilhantes até a segunda porta, que era azul, com estrelas desenhadas. Na placa estava escrito: PODE COM AJUDA.

Benjamin franziu a testa:

— "Por que com ajuda?"

A mamãe respondeu:

— "Porque algumas coisas são boas, mas precisam de alguém grande por perto."

Eles entraram de mãos dadas e encontraram um lugar para pintar, recortar, montar coisas e usar ferramentas de brinquedo.

Benjamin percebeu que, com ajuda, ele conseguia fazer coisas mais difíceis e mais legais, sem perigo.

Mais à frente, o caminho ficou um pouco mais estreito e eles viram a terceira porta. Ela era vermelha e tinha um desenho de fogo e uma placa grande: AGORA NÃO.

Benjamin deu um passo pra frente… e parou. O coração fez tum-tum.

— "Mas eu quero ver o que tem lá…"

O guarda-jardim apareceu de novo e falou com voz calma:

— "Algumas portas não são para agora. Não porque são ruins, mas porque ainda não são seguras."

Benjamin olhou para o mapa. Olhou para a mamãe. E pensou um pouquinho.

— "Então o 'agora não' é pra me proteger?"

— "Isso mesmo", disse a mamãe. "E quando você crescer mais, algumas dessas portas podem virar 'pode com ajuda'… e depois, 'pode'."

Benjamin gostou dessa ideia. Eles não entraram pela porta vermelha.

Em vez disso, seguiram por outro caminho que tinha flores, passarinhos e um banco para descansar.

No final do jardim, o guarda-jardim disse:

— "Ser esperto é saber escolher. Nem tudo é para agora. Mas sempre existe um caminho bom e seguro para seguir."

Benjamin sorriu e guardou o mapa com cuidado.

Naquele dia, ele aprendeu uma coisa muito importante:

Limites não são castigo. Limites são placas que mostram o caminho mais seguro para crescer. 💛🌈`
  },
  {
    id: 5,
    title: "Benjamin e o Relógio da Vez",
    description: "Uma história sobre paciência e compartilhar - Benjamin aprende que esperar a vez e dividir fazem a brincadeira ficar ainda melhor.",
    coverImage: "/images/capa_05.png",
    category: "⏰ Paciência e Impulsividade",
    content: `Benjamin gostava muito de brincar. Quando ele queria um brinquedo, queria agora.

Um dia, a mamãe levou Benjamin para brincar no parquinho. Tinha escorregador, balanço e uma caixa cheia de brinquedos coloridos.

Benjamin correu até o balanço e subiu primeiro. Depois correu até a bola. Depois quis o caminhão. Depois quis tudo ao mesmo tempo.

— "É minha vez! É minha vez!" ele dizia.

De repente, Benjamin viu algo diferente perto do banco. Era um relógio grande e sorridente, com ponteiros coloridos.

O relógio piscou e disse: — "Eu sou o Relógio da Vez. Eu ajudo as brincadeiras a ficarem mais felizes."

Benjamin franziu a testa: — "Como assim?"

O relógio explicou: — "Quando todo mundo quer tudo ao mesmo tempo, a brincadeira fica bagunçada. Mas quando cada um espera a sua vez, todo mundo consegue brincar."

O relógio fez tic-tac e apontou para o balanço: — "Agora é a vez do seu amigo."

Benjamin ficou com vontade de dizer "não". O coração dele bateu tum-tum. Mas ele respirou fundo… e desceu do balanço.

— "Tudo bem… pode ir."

O amigo sorriu e foi brincar.

O relógio fez tic-tac de novo e apontou para a caixa de brinquedos: — "Agora é a sua vez de escolher."

Benjamin escolheu o caminhão. Brincou um pouco. Depois o relógio disse: — "Que tal emprestar?"

Benjamin pensou. Olhou para o caminhão. Olhou para o amigo. E disse: — "Tá bom. Você pode brincar também."

E sabe o que aconteceu? A brincadeira ficou mais divertida. Teve risada. Teve corrida. Teve vez para todo mundo.

Quando estava na hora de ir embora, Benjamin procurou o relógio. Mas ele não estava mais lá.

A mamãe sorriu e disse: — "Acho que agora o Relógio da Vez mora no seu coração."

Benjamin sorriu também.

Naquele dia, ele aprendeu uma coisa muito importante: Esperar a vez e dividir não tiram a brincadeira. Fazem a brincadeira ficar ainda melhor. 💛`
  },
  {
    id: 6,
    title: "Benjamin e a Fábrica do Tempo que Quase Parou",
    description: "Uma história sobre ajudar em casa - Benjamin aprende que ajudar cria mais tempo para ficar com quem a gente ama.",
    coverImage: "/images/capa_06.png",
    category: "🎒 Autonomia e Organização",
    content: `Benjamin tinha muita energia. Ele gostava de brincar, correr e espalhar brinquedos pela casa como se fossem pistas de um grande jogo.

Mas naquela manhã, a casa parecia… cansada.

A mamãe andava rápido de um lado pro outro. Tinha roupa pra guardar, coisas pra organizar e horários pra cumprir. E Benjamin… bem… tinha deixado brinquedos no chão, o quarto bagunçado e estava brincando justo na hora de se arrumar.

De repente, o relógio da sala fez: "TIC… TOC… TIIIC…" E depois… "PLOFT!"

O ponteiro parou.

A casa ficou em silêncio por um segundo. E então, uma portinha apareceu no relógio.

De lá saiu um personagem engraçado, com chapéu e gravata torta, chamado Senhor Tempo.

— "Ai, ai, ai…", ele disse. "A Fábrica do Tempo está ficando bagunçada! Quando as coisas ficam fora do lugar e ninguém ajuda, o tempo fica cansado."

Benjamin arregalou os olhos: — "O tempo fica cansado?"

— "Fica sim!", respondeu o Senhor Tempo. "Quando os brinquedos não são guardados, quando as coisas ficam espalhadas e quando ninguém ajuda, as engrenagens precisam trabalhar sozinhas… e elas quase quebram."

O Senhor Tempo abriu uma janelinha no relógio e mostrou a Fábrica do Tempo lá dentro: tinha engrenagens, reloginhos e vários bonequinhos correndo de um lado pro outro, todos muito cansados.

Benjamin sentiu o coração fazer tum.

— "E como a gente ajuda o tempo?", perguntou ele.

O Senhor Tempo sorriu: — "Cada brinquedo guardado ajuda uma engrenagem. Cada coisa no lugar ajuda outra. Cada vez que você ajuda em casa, o tempo fica mais leve."

Benjamin pensou. Olhou para o quarto. Olhou para os brinquedos no chão. Olhou para a mamãe.

— "Eu posso tentar."

E ele tentou.

Guardou os brinquedos. Arrumou o quarto. Foi fazer as tarefas na hora combinada. Parou de brincar na hora errada e voltou depois, na hora certa.

Lá dentro do relógio, as engrenagens começaram a girar de novo: "TIC… TOC… TIC… TOC…"

O Senhor Tempo sorriu e disse: — "Viu só? Quando todo mundo ajuda, o tempo não fica pesado."

Mais tarde, em casa, a mamãe conseguiu sentar um pouquinho com Benjamin para brincar.

Ela abraçou ele e disse: — "Quando você ajuda, sobra tempo pra gente ficar junto."

Benjamin sorriu.

E naquele dia, ele aprendeu uma coisa muito importante: Ajudar não tira tempo da brincadeira. Ajudar cria mais tempo para ficar com quem a gente ama. 💛⏰✨`
  },
  {
    id: 7,
    title: "Benjamin e Amora, Juntos no Coração",
    description: "Uma história sobre saudade e amor - Benjamin aprende que alguns amigos nunca deixam de seguir a gente, eles só aprendem a morar no coração.",
    coverImage: "/images/capa_07.png",
    category: "💛 Amor e Família",
    content: `Benjamin tinha uma cachorrinha chamada Amora.

Ela era pequena, fofa e tinha o rabinho mais feliz do mundo.

Onde Benjamin ia, Amora ia atrás. Se ele corria, ela corria. Se ele sentava, ela sentava pertinho. Se ele ria, ela abanava o rabo.

Eles eram assim: um nunca ficava muito longe do outro.

Amora dormia perto da cama de Benjamin. Esperava ele voltar da escola. E ficava toda feliz quando ele dizia: — "Vem, Amora!"

Mas um dia, a família precisou mudar de casa.

A nova casa era diferente. E, naquela casa, Amora não podia ficar.

Benjamin não entendeu muito bem no começo. Ele só sentiu o coração apertar.

— "Mas ela sempre fica comigo…" — disse ele, abraçando Amora bem forte.

A mamãe explicou com carinho: — "Às vezes, a gente precisa fazer escolhas difíceis. Mas isso não muda o amor."

Amora foi morar em outro lugar, com pessoas que iam cuidar bem dela. Antes de ir, ela lambeu o rosto de Benjamin e abanou o rabinho, como se dissesse: — "Eu te amo."

Nos primeiros dias, Benjamin procurava Amora pela casa. O coração sentia saudade.

Mas, aos poucos, ele começou a lembrar das coisas boas: as corridas no quintal, as brincadeiras, os cochilos juntinhos.

A mamãe disse: — "O amor não vai embora quando a gente se separa. Ele só muda de lugar."

Benjamin pensou nisso.

Um dia, ele desenhou a Amora. Colocou o desenho perto da cama. E disse baixinho: — "Onde eu estiver, você está no meu coração."

E sabe de uma coisa? Mesmo longe, Amora continuava sendo a cachorrinha do Benjamin. E Benjamin continuava sendo o menino da Amora.

Porque alguns amigos nunca deixam de seguir a gente. Eles só aprendem a morar dentro do coração. 🐶💛✨`
  },
  {
    id: 8,
    title: "Benjamin e a Capa da Proteção",
    description: "Uma história sobre fé e segurança - Benjamin aprende que está guardado por um amor que nunca dorme.",
    coverImage: "/images/capa_08.png",
    category: "🚪 Limites e Obediência",
    content: `Era hora de dormir, e o quarto do Benjamin já estava quase todo pronto para a noite.

O pijama estava quentinho, o ursinho estava no travesseiro e a luz do abajur deixava tudo com um tom dourado e calmo.

Mesmo assim, Benjamin ainda se mexia na cama.

— Mamãe… — ele chamou baixinho — quem cuida de mim quando eu durmo?

A mamãe sentou ao lado da cama, fez um carinho no cabelo dele e respondeu: — "Deus cuida de você o tempo todo, meu filho. Mesmo quando você está dormindo, Ele não dorme."

Benjamin pensou nisso por um instante. Olhou para o teto… para a porta do quarto… e fechou os olhos, tentando imaginar como Deus cuidava dele.

De repente, na imaginação dele, algo muito bonito começou a acontecer.

Uma luz suave, brilhante como vaga-lume, começou a brilhar do lado de fora da janela e foi se espalhando pelo quarto. Essa luz foi formando uma capa enorme e macia, feita de fios de estrelas e pedacinhos de nuvem.

A capa desceu devagarinho e cobriu a cama inteira.

Quando a capa encostou nele, Benjamin sentiu o coração ficar quentinho e calmo. Era como se todo medo, toda preocupação e todo cansaço do dia simplesmente escorressem para fora.

Na imaginação dele, pequenos anjinhos vinham ajeitar a capa nos cantinhos da cama. Um puxou a ponta perto do travesseiro. Outro esticou o lado perto dos pés. E um terceiro deu um sorriso e disse: — "Pronto. Agora você pode descansar tranquilo."

O ursinho do Benjamin parecia até ter piscado para ele. O barulho da rua ficou bem baixinho. O quarto ficou silencioso e seguro.

Benjamin juntou as mãozinhas e falou bem baixinho: — "Obrigado, Papai do Céu, por cuidar de mim, da mamãe e da nossa casa."

A mamãe deu um beijo de boa noite, apagou a luz e fechou a porta devagar.

Debaixo da Capa da Proteção, Benjamin dormiu um sono profundo, calmo e cheio de sonhos bonitos, sabendo que estava guardado por um amor que nunca dorme. 🌙✨`
  },
  {
    id: 9,
    title: "Benjamin e o Jardim da Paciência",
    description: "Uma história sobre esperar com confiança - Benjamin aprende que esperar não é perder tempo, é confiar que as coisas estão acontecendo.",
    coverImage: "/images/capa_09.png",
    category: "⏰ Paciência e Impulsividade",
    content: `Numa certa manhã, Benjamin acordou com o coração apressado.

Tudo parecia demorar mais do que ele queria.

O sol demorava para entrar no quarto. O seu leite demorava para esfriar. O cadarço parecia embolar de propósito só para não dar o laço certo.

— Por que tudo demora tanto? — ele perguntou, cruzando os braços.

A mamãe se agachou na frente dele e disse com calma: — "Porque algumas coisas precisam de tempo para ficarem prontas do jeito mais bonito."

Mais tarde, eles foram passear em um lugar que Benjamin nunca tinha visto antes. Era um jardim enorme, com portões de madeira, caminhos de pedrinhas e flores de todas as cores.

Logo na entrada, havia um arco cheio de folhas verdes e uma plaquinha pendurada: "Bem-vindo ao Jardim da Paciência."

Quando Benjamin passou por baixo do arco, sentiu como se o ar ali fosse diferente. Mais calmo. Mais leve. Como se o tempo andasse devagarinho de propósito.

No primeiro caminho, eles encontraram um canteiro cheio de terra fofinha. Um jardineiro de barba branca e chapéu de palha regava com um regador azul que fazia plim-plim na terra.

— O que o senhor está fazendo? — Benjamin perguntou.

— Ajudando as sementes a acordarem — respondeu o jardineiro.

Benjamin se abaixou e olhou bem de perto. — "Mas eu não estou vendo nada!"

O jardineiro sorriu: — "Debaixo da terra, muita coisa já está acontecendo. Só que a gente não vê ainda."

Benjamin ficou imaginando pequenas raízes se espreguiçando lá embaixo, como se fossem braços acordando de um sono bem comprido.

Mais adiante, eles chegaram perto de uma árvore cheia de casulos pendurados, balançando com o vento. Um deles começou a se mexer.

— Olha, mamãe! — Benjamin disse, animado.

Uma borboleta estava tentando sair. Ela se mexia devagar, com muito esforço, como se estivesse abrindo uma porta muito pesada.

Benjamin deu um passo à frente para ajudar, mas a mamãe segurou sua mão.

— Se a gente apressar, ela não fica forte para voar.

Eles ficaram em silêncio, só observando. Depois de um tempinho, a borboleta conseguiu sair, abriu as asas ainda molhadas e ficou parada, sentindo o sol… E então, voou, desenhando um caminho colorido no ar.

Benjamin sentiu o peito ficar quentinho.

No fim do jardim, havia um lago pequenino com peixinhos laranjas e um banco embaixo de uma árvore grande. Eles se sentaram ali. O vento fazia as folhas dançarem. O tempo parecia ter aprendido a andar devagar.

— Mamãe… — Benjamin disse — então esperar não é perder tempo?

A mamãe sorriu e respondeu: — "Não. Esperar é confiar que as coisas estão acontecendo, mesmo quando a gente ainda não vê."

Na volta para casa, Benjamin amarrou o tênis com mais calma. Esperou o leite esfriar sem reclamar. E percebeu que, dentro dele, também tinha começado a crescer um pedacinho de paciência. 🌱✨`
  },
  {
    id: 10,
    title: "Benjamin e o Segredo de Respirar Tranquilo",
    description: "Uma história sobre acalmar a ansiedade - Benjamin aprende técnicas de respiração para quando o coração está apertado.",
    coverImage: "/images/capa_10.png",
    category: "😤 Emoções e Ansiedade",
    content: `Numa tarde bem calma, Benjamin estava brincando no tapete da sala quando sentiu o peito um pouquinho apertado.

Ele parou, colocou a mão no peito e chamou: — Mamãe…

A mamãe veio na hora, se agachou ao lado dele e perguntou com voz tranquila: — "O que foi, meu amor?"

— Parece que meu ar ficou curtinho — disse Benjamin.

A mamãe fez um carinho no cabelo dele e falou: — "Então vamos lembrar do segredo de respirar tranquilo."

Ela levou Benjamin até a janela, onde entrava uma luz bonita da tarde.

— Imagina que o ar é um balão invisível — disse ela. — "A gente enche devagar… e solta bem devagar também."

Eles sentaram no chão, pertinho da janela. A mamãe contou: — "Vamos encher o balão contando até três… Um… dois… três…"

Benjamin puxou o ar pelo nariz, bem devagar.

— Agora vamos soltar contando até três… Um… dois… três…

Ele soltou o ar pela boca, como se estivesse apagando uma vela de aniversário.

No começo, parecia só uma brincadeira. Mas, aos pouquinhos, o peito foi ficando mais leve. O coração foi batendo mais calmo. E a respiração foi ficando mais comprida e tranquila.

Benjamin fechou os olhos e imaginou que estava enchendo balões de todas as cores: um azul de céu, um verde de jardim, um amarelo de sol.

Cada vez que ele soltava o ar, era como se o medo e o aperto fossem embora junto.

— Mamãe… está ficando melhor — ele disse, com um sorrisinho.

A mamãe sorriu também: — "Viu só? Às vezes, o nosso corpo só precisa que a gente ensine ele a respirar com calma de novo."

Mais tarde, já deitado, com o ursinho ao lado, Benjamin ficou lembrando do segredo. Ele respirou devagar… soltou devagar… e sentiu o corpo todo relaxar.

Antes de dormir, juntou as mãozinhas e sussurrou: — "Obrigado, Papai do Céu, pelo ar que me acalma e pelo cuidado comigo."

E assim, respirando tranquilo, Benjamin dormiu em paz, guardando no coração um segredinho que podia usar sempre que precisasse. 🌙💙`
  },
  {
    id: 11,
    title: "Benjamin e o Amigo que Morava no Bolso",
    description: "Uma história sobre amizade - Benjamin aprende que amizade é estar junto, cuidar e convidar o outro para brincar.",
    coverImage: "/images/capa_11.png",
    category: "🔍 Curiosidade e Aventura",
    content: `Um dia, Benjamin percebeu uma coisa estranha. O bolso da mochila dele estava… se mexendo.

— "Ué…?" — disse Benjamin, olhando com cuidado.

Ele colocou a mão devagarzinho dentro do bolso. E tirou de lá um bichinho bem pequenino, com orelhas grandes e um chapéu torto.

— "Oi! Eu sou o Pipo", disse o bichinho. — "E acho que agora sou seu amigo."

Benjamin arregalou os olhos. — "Você mora no meu bolso?!"

— "Moro sim", respondeu Pipo. "É quentinho, dá pra ver o mundo e ainda cabe lanche."

Benjamin riu.

Pipo adorava acompanhar Benjamin em todo lugar. Quando Benjamin brincava, Pipo aplaudia. Quando Benjamin ficava triste, Pipo fazia caretas engraçadas. Quando Benjamin caía, Pipo dizia: — "Levanta, amigo. Eu fico aqui com você."

Um dia, no parquinho, Benjamin viu uma criança sentada sozinha no banco. Ela parecia meio triste.

Pipo cutucou o bolso e cochichou: — "Amigos dividem sorrisos."

Benjamin respirou fundo e foi até lá. — "Quer brincar com a gente?"

A criança sorriu. — "Quero!"

Eles brincaram de correr, de escorregar e de inventar histórias. Foi tão divertido que Benjamin até esqueceu de olhar para o bolso.

Quando chegou em casa, ele procurou Pipo. O bolso estava… vazio.

— "Pipo?" — chamou ele, preocupado.

Então viu um bilhetinho dobrado:

"Amigos de verdade não moram no bolso. Moram no coração. Agora você já sabe fazer novos amigos. Com carinho, Pipo 💛"

Benjamin sorriu.

No dia seguinte, ele voltou ao parquinho. E agora não estava mais sozinho.

Porque ele tinha aprendido uma coisa importante: Amizade é estar junto, cuidar e convidar o outro para brincar. 💛✨`
  },
  {
    id: 12,
    title: "Benjamin e o Dragão que Soluçava Bolhas",
    description: "Uma história divertida sobre ajudar os outros - Benjamin ajuda um dragão nervoso a se acalmar com risadas.",
    coverImage: "/images/capa_12.png",
    category: "😤 Emoções e Ansiedade",
    content: `Benjamin estava brincando no quintal quando ouviu um barulho estranho:

— Glup! Glup! HIC!

Ele olhou para trás da árvore… e quase caiu sentado de susto.

Tinha um dragão azul ali. Mas não era um dragão assustador.

Ele era redondinho, tinha asas pequeninas… e toda vez que soluçava, saíam bolhas de sabão pela boca!

— HIC! 🫧 — HIC! 🫧🫧

O dragão olhou para Benjamin e disse, meio envergonhado: — "Oi… acho que comi sabão mágico demais…"

Benjamin arregalou os olhos. — "Você solta bolhas quando soluça?!"

— "Solto… e não consigo parar!" — respondeu o dragão, fazendo HIC! e enchendo o quintal de bolhas.

As bolhas subiam, desciam, estouravam no nariz do Benjamin e faziam cócegas. Ploc! Plim! Plash!

Benjamin começou a rir. — "Isso é muito engraçado!"

O dragão tentou ficar sério… mas HIC! Saiu uma bolha bem na ponta do nariz dele.

— "Eu preciso de ajuda", disse o dragão. "Se eu continuar assim, vou encher o mundo de bolhas!"

Benjamin pensou. Pensou bastante. E teve uma ideia:

— "Quando eu tenho soluço, eu respiro fundo e bebo água."

O dragão respirou fundo. BEM fundo. — "Fuuuuuu…"

E tomou um gole de água do balde do quintal.

— HIC! 🫧

— "Não funcionou…" — disse ele, meio triste.

Benjamin então disse: — "Quando eu estou nervoso, eu rio. Vamos tentar rir?"

Eles começaram a rir juntos.

— "Hahahaha!" — "Hihihihi!" — "Hohohoho!"

De tanto rir, o dragão esqueceu de soluçar.

Esperaram um pouquinho.

Nada. Nenhuma bolha.

O dragão abriu um sorriso enorme. — "Funcionou!"

De repente, ele bateu as asinhas e começou a flutuar. — "Obrigado, Benjamin! Se você precisar de bolhas mágicas para brincar, é só me chamar!"

E POOF! O dragão voou embora, deixando uma última bolha em forma de coração no ar.

Benjamin ficou olhando para o céu e pensou: — "Esse foi o dragão mais engraçado do mundo."

E voltou a brincar, esperando o próximo HIC! mágico aparecer. 🫧🐉💛`
  },
  {
    id: 13,
    title: "Benjamin e o Botão do \"Agora!\"",
    description: "Uma história sobre impulsividade - Benjamin aprende a ouvir o botão do escutar, pensar e esperar.",
    coverImage: "/images/capa_13.png",
    category: "⏰ Paciência e Impulsividade",
    content: `Benjamin acordou com uma sensação estranha.

Parecia que tinha um botão invisível dentro dele.

Ninguém via. Só ele sentia.

Toda vez que Benjamin queria alguma coisa, o botão fazia:

"PIIM!"

E a vontade virava pressa.

— "Quero brincar AGORA!" PIIM!
— "Quero fazer do meu jeito AGORA!" PIIM!
— "Não quero esperar!" PIIM!

Na cozinha, a mamãe disse com calma:

— "Benjamin, espera um pouquinho que o suco está cheio."

Mas o botão fez: PIIM!

E Benjamin pegou o copo com uma mão só.

O copo escorregou. Ploc! Suco no chão.

Benjamin ficou parado, olhando. O coração fez tum.

— "Eu só queria fazer rápido…"

A mamãe respirou fundo, limpou e disse:

— "Às vezes, rápido demais vira bagunça."

Mais tarde, no quarto, a mamãe falou:

— "Guarda os brinquedos antes de sair."

O botão fez: PIIM!

— "Depois eu guardo!"

Benjamin correu para brincar.

Quando voltou, tropeçou num carrinho e quase caiu. Nada de machucar. Só o susto.

Ele sentou no chão e pensou:

— "Esse botão anda me colocando em encrenca…"

No quintal, o papai disse:

— "Espera eu chegar perto pra você subir aí."

O botão fez: PIIM!

— "Eu consigo sozinho!"

Benjamin subiu rápido.

Lá em cima, percebeu que estava mais alto do que parecia. As pernas ficaram durinhas. O coração bateu forte: tum-tum-tum.

— "Acho que… fui rápido demais…"

O papai ajudou a descer.

E disse com voz tranquila:

— "Coragem também é saber parar."

Benjamin ficou quietinho por um tempo.

Ele fechou os olhos e imaginou dois botões dentro dele:

Um era vermelho e gritava: "AGORA! AGORA! AGORA!"

O outro era azul e falava baixinho: "ESCUTA. PENSA. ESPERA."

Benjamin percebeu que quase sempre apertava o botão vermelho. Porque ele queria tudo do jeito dele. E queria rápido.

Mas o botão azul… fazia o coração ficar mais calmo.

Naquela tarde, ele decidiu tentar algo diferente.

Quando quis brincar, esperou a mamãe terminar.
Quando quis sair, guardou os brinquedos primeiro.
Quando quis subir, chamou o papai.

Não foi fácil. O botão vermelho ainda fazia: PIIM! às vezes.

Mas Benjamin começou a ouvir mais o botão azul.

No fim do dia, ele disse:

— "O botão do 'agora' é barulhento… Mas o botão do 'escutar' é mais inteligente."

A mamãe abraçou ele e respondeu:

— "Escutar protege. Esperar ensina. E pensar ajuda a gente a crescer."

Benjamin sorriu.

Ele sabia que o botão do "AGORA!" não ia sumir.

Mas agora ele também tinha aprendido a usar o botão do ESCUTAR, PENSAR E ESPERAR 💛

E isso fez o dia ficar… menos bagunçado, mais calmo e muito mais seguro.`
  },
  {
    id: 14,
    title: "Benjamin e Maria, Minha Princesinha",
    description: "Uma história sobre o amor de primo - Benjamin e Maria descobrem que quem ama de verdade nunca fica separado.",
    coverImage: "/images/capa_14.png",
    category: "💛 Amor e Família",
    content: `Quando a Maria nasceu, Benjamin achou que tinha acontecido uma coisa muito importante no mundo.

Ele olhou para aquele bebê pequenininho e disse, todo sério:

— "Ela é o meu bebezinho."

Naquele dia, Benjamin ganhou uma missão invisível: ser o guardião da princesinha.

Ele queria pegar no colo. Queria ajudar. Queria ficar por perto o tempo todo.

— "Cuidado, Benjamin", dizia a mamãe.

E ele respondia, com os olhos brilhando:

— "Eu sei. Eu cuido dela."

Maria era pequenininha, mas tinha um sorriso que parecia acender a casa.

E toda vez que ela sorria, Benjamin sentia o coração ficar quentinho.

Com o tempo, Maria cresceu. Aprendeu a andar. Aprendeu a falar.

E aprendeu a chamar Benjamin de:

— "Meu primo!"

Benjamin gostava de mostrar tudo para a Maria:

— "Olha meu quarto!"
— "Olha meu brinquedo!"
— "Vem brincar comigo!"

E Maria ia. Sempre ia.

Quando os dois estavam juntos, a casa mudava de jeito.

As paredes ficavam mais felizes. Os brinquedos pareciam rir. E até o sofá virava castelo, navio ou montanha.

Mas toda história de castelo tem um momento difícil…

Quando chegava a hora de ir embora, o coração apertava.

Maria fazia carinha triste. Benjamin abraçava forte.

— "Não vai embora ainda…"
— "Fica mais um pouquinho…"

Às vezes, os dois choravam.

Porque despedida é difícil quando a gente ama de verdade.

Benjamin dizia:

— "Se deixar, eu levo a Maria até pra escola… e pra minha casa… e pra todo lugar."

A mamãe sorria e dizia:

— "Ela mora no seu coração, né?"

E era verdade.

Uma vez, Benjamin teve uma ideia.

Pegou uma folha de papel e desenhou uma coroa.

Colocou no desenho da Maria e disse:

— "Assim, você continua sendo minha princesinha mesmo quando vai embora."

A mamãe explicou:

— "Quando a gente ama alguém, esse alguém nunca vai embora de verdade. Ele só aprende a morar dentro da gente."

E foi assim.

Mesmo quando estavam longe, Benjamin pensava na Maria. E Maria perguntava pelo Benjamin.

E toda vez que eles se reencontravam, o abraço parecia dizer:

— "A gente ficou separado… mas nunca deixou de ser junto." 💛`
  },
  {
    id: 15,
    title: "Benjamin e o Dia em que a Sala Virou Tempestade",
    description: "Uma história sobre comportamento na escola - Benjamin aprende que escola é lugar de aprender, respeitar e brincar, cada coisa no seu tempo.",
    coverImage: "/images/capa_15.png",
    category: "🤝 Comportamento e Convivência",
    content: `Benjamin gostava muito de ir para a escola. Ele gostava dos amigos, dos brinquedos e do recreio.

Mas naquele dia… ele acordou com energia de foguete 🚀.

Na sala, a professora começou a explicar a atividade.

E Benjamin começou a conversar.

Depois, começou a falar mais alto.

Depois, começou a brincar de lutinha com o amigo do lado.

E ainda disse:

— "Agora todo mundo faz do meu jeito!"

Os amigos ficaram confusos.

A professora tentou explicar de novo…

Mas Benjamin interrompeu, levantou, quis brincar e não fez a atividade.

A sala foi ficando barulhenta, bagunçada e meio… triste.

Parecia até que tinha passado uma tempestade por ali.

A professora se aproximou, se abaixou perto do Benjamin e falou com voz calma:

— "Benjamin, quando você conversa, briga, manda nos amigos e não escuta, a aula para. E todo mundo perde."

Benjamin cruzou os braços.

Mas, olhando em volta, viu que:

Um amigo não estava conseguindo fazer a atividade.
Outro estava chateado.
E a professora não conseguia ensinar.

O coração dele fez: tum tum.

Ele pensou:

— "Acho que eu baguncei tudo…"

Então Benjamin respirou fundo e disse:

— "Desculpa, professora. Eu vou tentar."

Ele sentou. Ouviu. Fez a atividade.

Parou a brincadeira de luta.

E quando quis falar, levantou a mão ✋.

A sala ficou mais calma.

A professora conseguiu explicar.

Os amigos conseguiram brincar depois — na hora certa.

No final do dia, a professora sorriu e disse:

— "Viu como quando você ajuda, a sala fica melhor?"

Benjamin sorriu também.

E aprendeu que escola é lugar de aprender, respeitar e brincar… cada coisa no seu tempo 🌈`
  },
  {
    id: 16,
    title: "Benjamin e a Montanha do \"Eu Consigo Sozinho\"",
    description: "Uma história sobre pedir ajuda - Benjamin aprende que ouvir, escolher bem e pedir ajuda faz a aventura ficar muito melhor.",
    coverImage: "/images/capa_16.png",
    category: "🚪 Limites e Obediência",
    content: `Benjamin adorava dizer uma frase mágica:

— "Eu consigo sozinho!"

Um dia, a família foi passear num lugar lindo, com uma montanha verdinha, trilhas coloridas e placas com desenhos.

A mamãe falou:

— "Benjamin, vamos pela trilha do coelhinho. É a mais segura."

Benjamin olhou e viu outra trilha, com pedras brilhantes e uma placa tortinha.

— "Eu quero ir por ali! Eu consigo sozinho!" — disse ele, todo confiante.

A mamãe respondeu com calma:

— "Tudo bem querer tentar, mas esse caminho é mais difícil. Vamos juntos?"

Mas Benjamin cruzou os braços e disse:

— "Não! Eu vou sozinho!"

Ele começou a subir. No começo foi fácil. Ele pulou uma pedra, desviou de um galhinho e sorriu:

— "Viu? Eu consigo!"

Mas logo o caminho ficou estreito e cansativo. As pedras escorregavam um pouquinho, e o vento fazia "fuuu".

Benjamin tentou mais um pouco… e mais um pouco…

Até que sentou numa pedra e suspirou:

— "Acho que… não tá tão fácil assim…"

Ele ficou quietinho por um instante. Pensou na mamãe. Pensou no papai. Pensou no caminho do coelhinho.

E então falou baixinho (mas corajoso):

— "Mãe… você pode me ajudar?"

A mamãe apareceu sorrindo, estendeu a mão e disse:

— "Claro. Pedir ajuda também é ser forte."

Juntos, eles voltaram para a trilha do coelhinho. O caminho era mais tranquilo, tinha flores, borboletas e até um passarinho que fez "piu piu" pra eles.

Lá em cima, Benjamin viu uma vista linda. O céu parecia gigante, e o coração dele estava leve.

Ele abraçou a mamãe e disse:

— "Eu gosto de tentar sozinho… mas gosto mais de ir com você."

E naquele dia, Benjamin aprendeu que ouvir, escolher bem e pedir ajuda faz a aventura ficar muito melhor.`
  },
  {
    id: 17,
    title: "Benjamin e o Mapa do Tesouro da Família",
    description: "Uma história sobre família - Benjamin descobre que a maior aventura é viver com quem ama.",
    coverImage: "/images/capa_17.png",
    category: "💛 Amor e Família",
    content: `Benjamin adorava aventuras. Mas a aventura preferida dele não era de dragões nem de monstros… era de descobrir coisas boas.

Um dia, ele acordou e encontrou em cima da mesa um mapa colorido com um coração desenhado no meio.

No papel estava escrito:

"Tesouro da Família"

Benjamin arregalou os olhos:

— "Um tesouro?!"

Ele chamou a mamãe e o papai, e os três olharam o mapa juntos. O mapa mostrava a casa deles com vários X marcados.

O primeiro X era no quarto.

Quando Benjamin chegou lá, encontrou um bilhetinho:

"Aqui moram os sonhos e as histórias antes de dormir."

O segundo X era na cozinha.

Lá tinha outro bilhete:

"Aqui moram os lanches gostosos e as conversas felizes."

O terceiro X era na sala.

Outro bilhete dizia:

"Aqui moram as brincadeiras e as risadas altas."

Benjamin correu para o último X, que era no quintal.

Quando ele chegou lá… tinha uma caixinha.

Dentro da caixinha não tinha ouro, nem moedas, nem joias.

Tinha um espelho pequeno e um papel escrito:

"O maior tesouro da casa é a nossa família."

Benjamin olhou no espelho, viu o próprio sorriso, e sentiu um abraço da mamãe e do papai por trás.

— "Então eu sou parte do tesouro?" — ele perguntou.

— "Você é um dos nossos maiores tesouros", disseram eles.

E naquele dia, Benjamin aprendeu que a maior aventura é viver com quem ama — e que família é o tesouro que não se perde nunca 💛🏡✨`
  },
  {
    id: 18,
    title: "Benjamin, Lucas e Theo e o Segredo da Floresta Quentinha",
    description: "Uma história sobre segurança e pedir ajuda - Benjamin e seus amigos aprendem que herói de verdade é quem sabe pedir ajuda.",
    coverImage: "/images/capa_18.png",
    category: "🤝 Comportamento e Convivência",
    content: `Era uma manhã bonita, e a floresta estava cheia de sons:

passarinhos cantando, folhas dançando com o vento e o sol fazendo luzinhas no chão.

Benjamin, Lucas e Theo estavam brincando de corrida entre as árvores.

Benjamin era o mais rápido.
Lucas era o mais forte.
Theo era o mais curioso.

De repente, Theo parou e disse:

— "Vocês estão sentindo esse cheirinho?"

No ar tinha um cheiro diferente, meio quentinho, meio esquisito.

Eles caminharam devagar e viram algo estranho:

uma fumacinha cinza subia atrás de umas árvores, como se a floresta estivesse fazendo "puf… puf…".

Lucas colocou a mão numa pedra e falou:

— "Está quente!"

Benjamin ficou sério e disse:

— "Quando tem fumaça e coisa quente, pode ser fogo. Fogo é perigoso."

Theo arregalou os olhos:

— "E agora?"

Benjamin pensou rápido (ele é rápido até pra pensar 😄):

— "A gente não chega perto. A gente vai para um lugar seguro e chama ajuda!"

Os três correram juntos por um caminho cheio de pedrinhas brilhantes e flores coloridas, até chegar numa parte da floresta onde o ar estava fresquinho e limpo.

Lá, eles encontraram pessoas vestidas com roupas de bombeiro, com capacetes e mangueiras.

— "Tem fumaça lá atrás das árvores!" — contou Theo.

— "Vocês fizeram muito bem em sair de perto", disse um dos bombeiros.

Os bombeiros foram correndo e logo… shhhhh!

A água apagou o fogo pequeno que estava começando.

Depois de um tempo, a floresta ficou calma de novo.

O sol voltou a brilhar forte, e os passarinhos voltaram a cantar.

Lucas sorriu:

— "Ainda bem que a gente não foi curioso demais."

Theo riu:

— "Ser curioso é bom… mas ser cuidadoso é melhor!"

E Benjamin completou:

— "Herói de verdade é quem sabe pedir ajuda."

E os três voltaram a brincar, felizes, sabendo que cuidar da floresta é cuidar de todo mundo 🌳💛`
  }
];

async function seed() {
  console.log("🌱 Iniciando seed das histórias do Benjamin...\n");

  try {
    // Limpar dados existentes
    console.log("🗑️  Limpando dados existentes...");
    await db.delete(pages);
    await db.delete(stories);

    // Inserir histórias
    for (const storyData of storiesData) {
      console.log(`📚 Inserindo: ${storyData.title}`);
      
      // Criar a história
      const [story] = await db.insert(stories).values({
        title: storyData.title,
        description: storyData.description,
        coverImage: storyData.coverImage,
      }).returning();

      // Criar uma única página com todo o conteúdo
      await db.insert(pages).values({
        storyId: story.id,
        pageNumber: 1,
        content: storyData.content,
        imageUrl: storyData.coverImage,
        isFinalDrawing: 0,
      });
    }

    console.log("\n✅ Seed completo! 18 histórias inseridas com sucesso.");
    console.log("\n📝 Categorias das histórias:");
    console.log("   😤 Emoções e Ansiedade: 3 histórias");
    console.log("   ⏰ Paciência e Impulsividade: 3 histórias");
    console.log("   🚪 Limites e Obediência: 3 histórias");
    console.log("   🤝 Comportamento e Convivência: 2 histórias");
    console.log("   🎒 Autonomia e Organização: 2 histórias");
    console.log("   🔍 Curiosidade e Aventura: 2 histórias");
    console.log("   💛 Amor e Família: 3 histórias");
    
  } catch (error) {
    console.error("❌ Erro durante o seed:", error);
    throw error;
  }

  process.exit(0);
}

seed();

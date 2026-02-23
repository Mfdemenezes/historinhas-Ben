# 📚 Livrinhos do Benjamin

Uma biblioteca interativa de histórias infantis para o Benjamin, com 18 histórias mágicas para ler juntos 💛

![Benjamin](./client/public/images/capa.png)

## 🌟 Características

- **18 histórias originais** organizadas por categoria
- **Interface interativa** com animações suaves
- **Modo de leitura imersivo** com transições de página
- **Sistema de administração** para adicionar/editar histórias
- **100% em português brasileiro**

## 📖 Categorias das Histórias

| Categoria | Histórias |
|-----------|-----------|
| 😤 Emoções e Ansiedade | 3 histórias |
| ⏰ Paciência e Impulsividade | 3 histórias |
| 🚪 Limites e Obediência | 3 histórias |
| 🤝 Comportamento e Convivência | 2 histórias |
| 🎒 Autonomia e Organização | 2 histórias |
| 🔍 Curiosidade e Aventura | 2 histórias |
| 💛 Amor e Família | 3 histórias |

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- PostgreSQL (ou usar DATABASE_URL de um serviço externo)

### Instalação

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Configurar banco de dados:**
   - Certifique-se de que o PostgreSQL está rodando
   - Configure a variável de ambiente `DATABASE_URL`

3. **Criar tabelas no banco:**
   ```bash
   npm run db:push
   ```

4. **Popular com as 18 histórias:**
   ```bash
   npm run db:seed
   ```

5. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

6. **Acessar:** http://localhost:5000

## 🛠️ Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Compila para produção |
| `npm run start` | Inicia servidor de produção |
| `npm run db:push` | Sincroniza schema com banco |
| `npm run db:seed` | Popula banco com as 18 histórias |

## 📁 Estrutura do Projeto

```
historinhas-Ben-replit/
├── client/               # Frontend React
│   ├── public/
│   │   └── images/       # Imagens das capas
│   └── src/
│       ├── components/   # Componentes React
│       ├── hooks/        # Hooks customizados
│       ├── pages/        # Páginas da aplicação
│       └── lib/          # Utilitários
├── server/               # Backend Express
│   ├── routes.ts         # Rotas da API
│   ├── storage.ts        # Camada de dados
│   └── db.ts             # Conexão PostgreSQL
├── shared/               # Código compartilhado
│   ├── schema.ts         # Schema do banco (Drizzle)
│   └── routes.ts         # Definição das rotas
└── script/
    └── seed-stories.ts   # Script de seed
```

## 📚 Lista das Histórias

1. **A Aventura do Benjamin e a Poça Misteriosa** - Curiosidade e cautela
2. **Benjamin e o Cavalo do Coração Valente** - Coragem e perseverança
3. **Benjamin e a Mochila das Pequenas Conquistas** - Autonomia
4. **Benjamin e o Jardim dos Caminhos Espertos** - Limites
5. **Benjamin e o Relógio da Vez** - Paciência
6. **Benjamin e a Fábrica do Tempo que Quase Parou** - Ajudar em casa
7. **Benjamin e Amora, Juntos no Coração** - Saudade
8. **Benjamin e a Capa da Proteção** - Fé
9. **Benjamin e o Jardim da Paciência** - Esperar
10. **Benjamin e o Segredo de Respirar Tranquilo** - Ansiedade
11. **Benjamin e o Amigo que Morava no Bolso** - Amizade
12. **Benjamin e o Dragão que Soluçava Bolhas** - Ajudar os outros
13. **Benjamin e o Botão do "Agora!"** - Impulsividade
14. **Benjamin e Maria, Minha Princesinha** - Amor de primo
15. **Benjamin e o Dia em que a Sala Virou Tempestade** - Escola
16. **Benjamin e a Montanha do "Eu Consigo Sozinho"** - Pedir ajuda
17. **Benjamin e o Mapa do Tesouro da Família** - Família
18. **Benjamin, Lucas e Theo e o Segredo da Floresta Quentinha** - Segurança

## 💛 Feito com amor para o Benjamin

---

*"Nem tudo que parece brincadeira é seguro. E ser cuidadoso também é ser corajoso."* 💛

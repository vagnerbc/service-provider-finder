export type HomePageContent = {
  applicationName: string;
  headline: string;
  description: string;
  availabilityMessage: string;
  audienceMessage: string;
  principles: Array<{
    title: string;
    description: string;
  }>;
};

export const homePageContent: HomePageContent = {
  applicationName: "Faxinal Conectado!",
  headline: "Encontre prestadores de serviços locais de forma rápida e prática.",
  description:
    "Uma plataforma criada para aproximar moradores de Faxinal e região de profissionais confiáveis para o serviço que precisam.",
  availabilityMessage:
    "Estamos preparando a experiência completa para busca, cadastro e gestão de serviços. Em breve, consumidores e prestadores terão um espaço simples para se conectar.",
  audienceMessage:
    "Para quem precisa resolver uma demanda do dia a dia e para profissionais que querem divulgar seus serviços com clareza.",
  principles: [
    {
      title: "Busca simples",
      description:
        "A experiência será organizada para ajudar pessoas a encontrar ajuda sem burocracia."
    },
    {
      title: "Serviços locais",
      description:
        "O foco é valorizar prestadores próximos e facilitar contatos úteis para a comunidade."
    },
    {
      title: "Conexão prática",
      description: "Cada etapa será pensada para economizar tempo e dar confiança ao usuário."
    }
  ]
};

export const prohibitedUnavailableActions = [
  "login",
  "entrar",
  "criar conta",
  "cadastre-se",
  "buscar agora",
  "cadastrar serviço",
  "gerenciar serviços"
];

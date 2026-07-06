export const homeMetadata = {
  title: "Faxinal Conectado",
  description:
    "Faxinal Conectado aproxima pessoas de prestadores de serviços locais de forma rápida e prática."
};

export function applyHomeMetadata(): void {
  document.title = homeMetadata.title;

  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (description) {
    description.content = homeMetadata.description;
  }
}

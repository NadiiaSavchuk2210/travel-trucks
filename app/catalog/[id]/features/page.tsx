interface Props {
  params: Promise<{ id: string }>;
}

export default async function FeaturesPage({ params }: Props) {
  const { id } = await params;

  return <div>{id} FeaturesPage</div>;
}

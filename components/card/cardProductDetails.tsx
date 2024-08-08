
import { Card } from "flowbite-react";

type ProspType = {
    title: string,
    image: string,
    description: string
}

export default function CardProductDetai({title, image, description}: ProspType) {
  return (
    <Card className="max-w-sm" imgSrc={image} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
}

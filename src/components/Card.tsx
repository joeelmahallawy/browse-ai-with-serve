import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Center,
  Box,
  Flex,
} from "@mantine/core";

type SheetData = {
  Batch: string;
  Company: string;
  Description: string;
  Industry: string;
  Location: string;
  Logo: string;
};

const CardDemo = ({
  row: { Company, Logo, Location, Industry, Batch, Description },
}: {
  row: SheetData;
}) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      sx={{ display: "inline-block", width: "23%", margin: "1%" }}
    >
      <Card.Section>
        <Center>
          <Image src={Logo} width={160} alt="Norway" />
        </Center>
      </Card.Section>

      <Box mt="md" mb="xs">
        <Text weight={500}>{Company}</Text>
        <Text size={10} color="dimmed">
          {removeDuplicate(Location)}
        </Text>
      </Box>

      <Text size={12}>{Description}</Text>
      <Badge fullWidth color="blue" variant="light" mt={10} p={15}>
        {Industry}
      </Badge>
    </Card>
  );
};

export default CardDemo;

// copied from the internet :P (used to remove the duplicate locations on the YC companies page)
// @ts-expect-error
const removeDuplicate = (str) => [...new Set(str.split("; "))].join("; ");

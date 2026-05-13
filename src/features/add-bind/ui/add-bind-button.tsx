import { Button } from "@/shared/ui/button";

// later add full props
interface Props {
  onAdd: () => void;
}

export const AddBindButton = ({ onAdd }: Props) => (
  <Button onClick={() => onAdd()}>
    AddBind
    {/* for test :p */}
  </Button>
);

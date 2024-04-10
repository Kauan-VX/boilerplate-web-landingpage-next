import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

interface IAutocomplete {
  array: { value: number; name: string }[];
  label: string;
}

export default function AutoComplete({ array, label }: IAutocomplete) {
  return (
    <Autocomplete label={label} className="max-w-xs">
      {array.map((item) => (
        <AutocompleteItem key={item.value} value={item.value}>
          {item.name}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
}

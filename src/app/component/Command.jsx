import React, { useState } from 'react';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const Commaand = () => {
  const [selectedCommand, setSelectedCommand] = useState("Skill Test"); // Set default to "Skill Test"

  const handleSelect = (command) => {
    setSelectedCommand(command);
  };

  return (
    <div>
      <Command>
        <CommandList>
          <CommandGroup>
            <CommandItem
              onSelect={() => handleSelect("Dashboard")}
              className={selectedCommand === "Dashboard" ? "bg-gray-400" : ""}
            >
              Dashboard
            </CommandItem>
            <CommandItem
              onSelect={() => handleSelect("Skill Test")}
              className={selectedCommand === "Skill Test" ? "bg-gray-400" : ""}
            >
              Skill Test
            </CommandItem>
            <CommandItem
              onSelect={() => handleSelect("Internship")}
              className={selectedCommand === "Internship" ? "bg-gray-400" : ""}
            >
              Internship
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default Commaand;

import { Box, Select, SelectProps } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = SelectProps & { id: string };

const selectOptions = ['10', '25', '50', '100'];

const ToggleDropdown = ({ value, onChange, id }: Props) => {
  const { setValue } = useFormContext();
  useEffect(() => {
    setValue(id, selectOptions[0]);
  }, [id, setValue]);
  return (
    <Box width="100px" mr={3}>
      <Select
        bg="black"
        borderColor="black"
        color="white"
        value={value}
        onChange={onChange}
        name={id}
      >
        {selectOptions.map((selectOption, i) => (
          <option key={i} value={selectOption}>
            {selectOption}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default ToggleDropdown;

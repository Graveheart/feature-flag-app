import {
  Box,
  Collapse,
  CSSObject,
  Divider,
  Flex,
  Heading,
  Icon,
  Select,
  Switch,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Controller, useController, useFormContext } from 'react-hook-form';
import { Toggle } from '../form.types';

/* eslint-disable-next-line */
export interface TogglePanelProps extends Toggle {}

export default function TogglePanel({
  id,
  label,
  hasDropdown,
  childToggles = [],
}: TogglePanelProps) {
  const { control } = useFormContext();
  const {
    field: { onChange, name, value },
  } = useController({
    name: id,
    control,
    rules: { required: true },
    defaultValue: true,
  });
  const hasChildToggles = !!childToggles.length;
  const isExpanded = hasChildToggles && !!value;
  const iconStyles: CSSObject = {
    transform: isExpanded ? 'rotate(-180deg)' : undefined,
    transition: 'transform 0.2s',
    transformOrigin: 'center',
  };
  return (
    <Flex
      width={{ base: '100%' }}
      borderRadius="4px"
      boxShadow="0px 1px 4px rgba(0, 0, 0, 0.16)"
      bg="gray.900"
      direction="column"
    >
      <Flex p={5}>
        <Flex align="center">
          <Box
            height="32px"
            width="32px"
            mr={3}
            borderRadius="4px"
            boxShadow="0px 1px 4px rgba(0, 0, 0, 0.16)"
            bg="gray.600"
          />
          <Flex direction="column" justify="center" lineHeight="20px">
            <Text fontSize="md" fontWeight={500}>
              {label}
            </Text>
          </Flex>
        </Flex>
        <Box
          ml="auto"
          display={{ base: 'none', sm: 'flex' }}
          alignItems="center"
        >
          {hasDropdown && (
            <Box width="100px" mr={3}>
              <Select
                bg="black"
                borderColor="black"
                color="white"
                placeholder="10"
              />
            </Box>
          )}
          <Switch size="md" onChange={onChange} isChecked={value} />
          {!!childToggles.length && (
            <Tooltip label="Expand" placement="top">
              <Icon
                viewBox="0 0 24 24"
                aria-hidden
                boxSize="40px"
                ml={6}
                __css={iconStyles}
              >
                <path
                  fill="currentColor"
                  d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                />
              </Icon>
            </Tooltip>
          )}
        </Box>
      </Flex>

      {hasChildToggles && (
        <Collapse in={isExpanded}>
          <Flex direction="column" mx="5">
            {childToggles.map((input) => (
              <TogglePanel {...input} key={input.id} />
            ))}
          </Flex>
        </Collapse>
      )}
    </Flex>
  );
}

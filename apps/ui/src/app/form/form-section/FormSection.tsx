import { Grid, GridItem } from '@chakra-ui/react';
import styled from 'styled-components';
import { Section } from '../form.types';
import { getGridPropsForType } from '../helpers';
import TogglePanel from '../toggle-panel/TogglePanel';

/* eslint-disable-next-line */
export interface FormSectionProps extends Section {}

function FormSection({ title, type, toggles }: FormSectionProps) {
  const gridProps = getGridPropsForType(type);
  console.log(Math.ceil(toggles.length / 2));
  return (
    <GridItem colSpan={Math.ceil(toggles.length / 2)}>
      <h2>{title}</h2>
      <Grid {...gridProps}>
        {toggles.map((toggle) => (
          <GridItem key={toggle.id}>
            <TogglePanel {...toggle} />
          </GridItem>
        ))}
      </Grid>
    </GridItem>
  );
}

export default FormSection;

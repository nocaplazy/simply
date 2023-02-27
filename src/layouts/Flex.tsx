import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
  children: ReactNode;
  gap: string;
  width?: 'fit-content' | '100%';
  margin?: string;
  padding?: string;
  wrap?: boolean;
}

type DirectionType = 'column' | 'row';
type PositionType = 'start' | 'center' | 'end';

const curry =
  (direction: DirectionType) =>
  (align?: PositionType) =>
  (justify?: PositionType) =>
  ({ children, gap, margin, padding, width, wrap }: PropsType) =>
    (
      <_Wrapper
        gap={gap}
        width={width}
        margin={margin}
        padding={padding}
        align={align}
        justify={justify}
        direction={direction}
        wrap={wrap}
      >
        {children}
      </_Wrapper>
    );

const column = curry('column');
const row = curry('row');

export const ColumnGap = column()();

export const ColumnStartGap = column('start')();

export const ColumnCenterGap = column('center')();

export const ColumnEndGap = column('end')();

export const RowGap = row()();

export const RowStartGap = row()('start');

export const RowCenterGap = row()('center');

export const RowEndGap = row()('end');

export const RowColumnCenterGap = row('center')('center');

const _Wrapper = styled.div<{
  gap: string;
  margin?: string;
  padding?: string;
  direction?: DirectionType;
  align?: PositionType;
  justify?: PositionType;
  width?: 'fit-content' | '100%';
  wrap?: boolean;
}>`
  width: ${({ width }) => width};
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  flex-wrap: ${({ wrap }) => wrap && 'wrap'};
`;

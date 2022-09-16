import * as C from "./styles";

type Props = {
  label: string;
  incon?: any;
  onclick: React.MouseEventHandler<HTMLDivElement>;
};

export const Button = ({ label, incon, onclick }: Props) => {
  return (
        <C.Container onClick={onclick}>
          {incon && 
            <C.IconArea>
                <C.Incon src={incon} />
            </C.IconArea>
          }
            <C.label>{label}</C.label>
        </C.Container>
    );
}

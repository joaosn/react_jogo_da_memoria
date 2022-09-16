import { GridItem as GridType } from "../../types/GridItem";
import * as C from "./styles";
import b7web from "../../svgs/b7.svg";
import { Items } from "../../data/Items"; 

type Props = {
    item: GridType,
    onClick: () => void,
};

export const GridItem = ({item,onClick}:Props) => {
    return (
        <C.Container 
          showBackground={item.permanent || item.shown}  
          onClick={onClick}
        >
            {!item.permanent && !item.shown &&
                <C.Icon src={b7web} alt="ops.." opacity={.1} />
            }
            {(item.permanent || item.shown) && item.item !== null &&
                <C.Icon src={Items[item.item].icon} alt="ops.." />
            }
        </C.Container>
    );
};
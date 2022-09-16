import { useEffect,useState } from 'react';
import * as C from './App.style';
import logo from './assets/logo.png';
import restart from './svgs/restart.svg';


import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';
import { GridItem } from './components/GridItem';
import { GridItem as GridType } from './types/GridItem';
import { Items } from './data/Items';
import { formatTime } from './helpers/formatTIme';



const App = () => {
  const [play, setPlay] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [move, setMove] = useState<number>(0);
  const [shownCount, setshownCount] = useState<number>(0);
  const [gridItems, setgridItems] = useState<GridType[]>([]);

  useEffect( () => resetAndCreteGrid(),[]);

  useEffect( () => {
    if(play && move > 0 && gridItems.every(item=> item.permanent)){
      setPlay(false);
    }
  },[move,shownCount]);

  useEffect( () => {
    const timer = setInterval(()=>{
      if(play) setTime(time+1);
    },1000);

    return () => clearInterval(timer);
  },[play,time]);


  useEffect( () => {
    let tmpGrid = [...gridItems];

    function sets(grid:GridType[]){
      setgridItems(grid);
      setshownCount(0);
    }
    
    if(shownCount === 2) {
      let open = gridItems.filter(item => item.shown);
      

      if(open.length === 2){
        if(open[0].item === open[1].item){
            for(let i in tmpGrid){
              if(tmpGrid[i].shown){
                tmpGrid[i].permanent = true;
                tmpGrid[i].shown = false;
              }
            }
            sets(tmpGrid);
        }else{
            setTimeout(()=>{
              for(let i in tmpGrid){
                tmpGrid[i].shown = false;
              }
              sets(tmpGrid);
            },500);
      
        }
      }

      setMove(move => move+1);
    }
  },[shownCount,gridItems]);

  function resetAndCreteGrid(){
    setMove(0);
    setTime(0);
    setshownCount(0);
    

    let tmp:GridType[] = [];
    let qtitems = Items.length * 2; //qt de itens * 2 pq cada item tem 2 pares
    for(let i=0; i<qtitems; i++) tmp.push({
         item: null, shown: false,permanent: false        
    });

    for (let index = 0; index < 2; index++) { //2 item de cada
      for (let x = 0; x < Items.length; x++) {
        let pos = -1;
        while(pos < 0 || tmp[pos].item !== null){
          pos = Math.floor(Math.random() * qtitems);
        }
        tmp[pos].item = x;
      
      }
    }
    setgridItems(tmp);
    setPlay(true);

  }

  function handleItemClick(index:number){
    if(play && index !== null && shownCount < 2) {
      let tmpGrid = [...gridItems];

      if(tmpGrid[index].shown === false && tmpGrid[index].permanent === false){
        tmpGrid[index].shown = true;
        setshownCount(shownCount+1);
      }
      setgridItems(tmpGrid);
    }
    
  }

  return (
    <C.Container>
      <C.Info>
       
        <C.LogoLink href="">
            <img src={logo} alt="ops.." width="200"/>
            <a href='https://github.com/joaosn'>With JoaoSN🍀</a>
        </C.LogoLink>

        <C.infoArea>
          <C.InfoText>React Memory Game is a game developed in ReactJS.</C.InfoText>
          <InfoItem label="Tempo" value={formatTime(time)} />
          <InfoItem label="Movimentos" value={move.toString()} />
        </C.infoArea> 

        <Button label='Reniciar' incon={restart} onclick={resetAndCreteGrid}  />
      </C.Info>
      <C.GridArea>
        <C.Grid>
          {gridItems.map((item, index) => (
            <GridItem 
              key={index}
              item={item}
              onClick={()=>handleItemClick(index)}
            />
          ))}   
        </C.Grid>
      </C.GridArea>
    </C.Container>
  );
};

export default App;
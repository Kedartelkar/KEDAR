import * as React from 'react';
//import styles from './Kedar.module.scss';
import { IKedarProps } from './IKedarProps';
import styles from './Kedar.module.scss';
//import { escape } from '@microsoft/sp-lodash-subset';

export default class Kedar extends React.Component<IKedarProps, {}> {
  public render(): React.ReactElement<IKedarProps> {
    

    return (
    <div>
      <h1 className= {styles.welcome}>
        Hellow Panda 
      </h1><br />
      <div>
        <img src="https://static01.nyt.com/images/2022/07/05/science/30tb-panda/30tb-panda-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt="Sleeping Panda"  className={styles.welcomeImage}/>
      </div>
     <div> <p>
     Giant pandas are dietary enigmas. Despite being part of the meat-eating order Carnivora, pandas typically practice a plant-based diet, eschewing salmon and seal meat at the bear family barbecue for shoots of bamboo. And because they lack multichambered stomachs to extract nutrients from the tough plant material, the pudgy bears eat around 30 pounds of bamboo each day to sustain themselves.

      </p></div>
    </div>
    );
  }
}

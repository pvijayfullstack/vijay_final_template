import React from 'react'

import Polygon15 from '../../images/Polygon15.svg'
import Polygon16 from '../../images/Polygon16.svg'
import Rectangle1645 from '../../images/Rectangle1645.svg'

import data from './data.json'


const results = (d, style) => {
    return(
        <div className={style['row']}>
        <div className={style['col']}>
            {d.price}
             {["New Product", "Variety"].includes(d.name) &&  <img src={Rectangle1645} class="Rectangle-1659" /> }
            <div className={style['Trailing-30-days']}>{d.des}</div>
        </div>
        <div className={style['col']}>
            <div className={style['sub-row']}>
                    <div className={style['sub-col']}>
                        <div  className={style['Prior-30-Days']}>{d.priorDays}</div>
                        <div  className={style['percentage']}>{d.priceDown}</div>
                    </div>
                    <div className={style['sub-col']}>
                        <div  className={style['Polygon-15']}>
                        <img src={Polygon15}
                            className="Polygon-15"/>
                        </div>
                    </div>
                </div>
                <div className={style['line']}></div>
                <div className={style['sub-row']}>
                    <div className={style['sub-col']}>
                        <div  className={style['Prior-30-Days']}>{d.priorYear}</div>
                        <div  className={style['percentage']}>{d.priceUp}</div>
                    </div>
                    <div className={style['sub-col']}>
                        <div  className={style['Polygon-15']}>
                        <img src={Polygon16}
                            className="Polygon-15"/>
                        </div>
                    </div>
                </div>
        </div>
     </div>
    )
}

const result = (d) => <div style={{color: 'red'}}>{JSON.stringify(d)}</div>

const Cards = ({style}) => {
    return(
       <>
        { data && data.map(d => {
           return(
            <>
            <div className={style["Rectangle-1632"]}>
                 <div className={style[`${d.type['throughtput'].style}`]}>
                    {d.type["throughtput"].name }
                </div>
                { results(d.type["throughtput"], style) }
            </div>
            <div className={style["Rectangle-1632"]}>
                 <div className={style[`${d.type['inventoryDollers'].style}`]}>
                    {d.type["inventoryDollers"].name}
                 </div>
                 { results(d.type["inventoryDollers"], style) }
            </div>
            <div className={style["Rectangle-1632"]}>
                 <div className={style[`${d.type['inventoryTunes'].style}`]}>
                    {d.type["inventoryTunes"].name}
                 </div>
                 { results(d.type["inventoryTunes"], style) }
               
            </div>
            <div className={style["Rectangle-1632"]}>
                 <div className={style[`${d.type['newProduct'].style}`]}>
                    {d.type["newProduct"].name}
                 </div>
                 { results(d.type["newProduct"], style) }
            </div>
            <div className={style["Rectangle-1632"]}>
                 <div className={style[`${d.type['freshness'].style}`]}>
                    {d.type["freshness"].name}
                 </div>
                 { results(d.type["freshness"], style) }
            </div>
            <div className={style["Rectangle-1632"]}>
                 <div className={style[`${d.type['variety'].style}`]}>
                    {d.type["variety"].name}
                 </div>
                 { results(d.type["variety"], style) }
            </div>
            </>
            )
        }
        )}
       </>
    )
}

export default Cards



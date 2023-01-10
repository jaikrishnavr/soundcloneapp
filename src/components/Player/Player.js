import React from 'react'
import style from './Player.module.css'
function Player() {
    return (
        <div className={style.playerWrapper}>
            <div className={style.progressBar} ></div>
            <div className={style.details}>
                <div className={style.time}>01:30 / 03:30 <span style={{ marginLeft: "30px" }}>Max</span></div>
                <div className={style.speed}>1.0</div>
            </div>

        </div>
    )
}

export default Player

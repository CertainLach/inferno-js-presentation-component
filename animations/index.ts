import * as main from '../styles/main.less';

export type IAnimation = {
    enter:{
        start:string,
        active:string
    },
    leave:{
        start:string,
        active:string
    },
    time: number
}

export const slide:IAnimation = {
    enter:{
        start: main.slideEnter,
        active: main.slideEnterActive
    },
    leave:{
        start: main.slideLeave,
        active: main.sliveLeaveActive
    },
    time: 1000
}
export const zoom:IAnimation = {
    enter:{
        start: main.zoomEnter,
        active: main.zoomEnterActive
    },
    leave:{
        start: main.zoomLeave,
        active: main.zoomLeaveActive
    },
    time: 1000
}
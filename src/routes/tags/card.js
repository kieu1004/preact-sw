import { h } from 'preact';
import style from './style'

export default function (props) {
	return <div class={style['card']}>{ props.children }</div>
}
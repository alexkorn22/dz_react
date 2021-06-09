import React, {useEffect, useState} from "react";

export default function Total({cart}) {
    let [count, setCount] = useState(0);
    let [sum, setSum] = useState(0);

    useEffect(() => {
        setCount(cart.length);
        let sum = 0;
        cart.map(item => sum += item.price * item.count);
        setSum(sum);
    }, [cart])

    return <div className={'total'}>
        <div className={'total__row total__row_withMargin'}>
            <b>Количество</b>
            <span>{count}</span>
        </div>
        <div className={'total__row total__row_withMargin'}>
            <b>Сумма</b>
            <span>{sum.toFixed(2)}</span>
        </div>
    </div>
}
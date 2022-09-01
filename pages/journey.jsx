import React, { useRef,useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import clamp from 'lodash-es/clamp'
import swap from 'lodash-move'
import { useGesture } from 'react-with-gesture'
import { useSprings, animated, interpolate } from 'react-spring'
import classes from './journey.module.css'
import { AnimatePresence, motion } from "framer-motion";

function Modal({ modal, setModal }) {
  return (
    <AnimatePresence>
      {modal && (
        <div className="px-5 fixed h-full w-full flex items-center justify-center top-0 left-0">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1
            }}
            exit={{
              y: -50,
              opacity: 0
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="absolute z-10 p-5 bg-indigo-600 h-auto w-full max-w-md rounded text-white"
          >
            <button
              onClick={() => setModal((modal) => !modal)}
              className="absolute top-0 right-0 -mt-4 -mr-4 bg-white text-indigo-600 border border-indigo-600 h-8 w-8 block mb-2 rounded-full"
            >
              &times;
            </button>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={() => setModal((modal) => !modal)}
            className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
          />
        </div>
      )}
    </AnimatePresence>
  );
}





const fn = (order, down, originalIndex, curIndex, y) => index =>
  down && index === originalIndex
    ? 
      { y: curIndex * 100 + y, scale: 1.1, zIndex: '1', shadow: 15, immediate: n => n === 'y' || n === 'zIndex' }
    : { y: order.indexOf(index) * 100, scale: 1, zIndex: '0', shadow: 1, immediate: false }
  
    const journey = () => {


      // pop up
      const [modal, setModal] = useState(false);


      const items =`the idea,the problem,the rescue,the result`.split(',')
      const order = useRef(items.map((_, index) => index)) 
      
      const [springs, setSprings] = useSprings(items.length, fn(order.current))
      const bind = useGesture(({ args: [originalIndex], down, delta: [, y] }) => {
        const curIndex = order.current.indexOf(originalIndex)
        const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1)
        const newOrder = swap(order.current, curIndex, curRow)
       
        setSprings(fn(newOrder, down, originalIndex, curIndex, y))

        if (!down) order.current = newOrder
      })
      return (
<>
        <div className='flex justify-center items-center'>
        <div className={classes.content} style={{ height: items.length * 100 }}>
          {springs.map(({ zIndex, shadow, y, scale }, i) => (
            <>
            <animated.div
              {...bind(i)}
              key={i}
              style={{
                zIndex,
                boxShadow: shadow.interpolate(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
                transform: interpolate([y, scale], (y, s) => `translate3d(0,${y}px,0) scale(${s})`)
              }}
              children={items[i]}
              onClick={()=>{setModal(true)}}
            />
            </>
          ))}
        </div>
        <Modal {...{ modal, setModal }} />
        </div>
        </>
      )
    }
export default journey



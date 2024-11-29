import React, { useContext } from 'react'
import { assets } from '../assets/assets';
import { Context } from "../context/Context";
import Card from './Card';
import Greet from './Greet';
import Result from './Result';
import Input from './Input';

const MainContent = () => {
    const {
        showResult,
    } = useContext(Context);
  return (
    <div className="max-w-[900px] m-auto">
                    {!showResult ? (
                        <>
                           <Greet/>

                            <div className="grid grid-cols-4 p-5 gap-4 md:grid-cols-2 sm:flex sm:flex-col sm:gap-4">
                                <Card/>
                            </div>
                        </>
                    ) : (
                        <Result/>
                    )}

                    <Input/>
                </div>
  )
}

export default MainContent
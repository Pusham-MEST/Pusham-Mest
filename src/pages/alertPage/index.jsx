import React from 'react'
import { hero } from '../../assets'

const AlertPage = () => {
    return (
        <div>
            <div className='bg-[#1271B4] h-[80vh]'>
                <div className='pt-[50px] pl-[40px] font-bold text-[30px]'>
                    <h1>Outage Info</h1>
                </div>
                <div className='max-w-[40%] pl-[40px] mt-[50px] space-y-4'>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">30th July, 2024</div>
                        <div className="collapse-content">
                            <p>Description</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">2nd August,2024</div>
                        <div className="collapse-content">
                            <p>Description</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">10th August,2024</div>
                        <div className="collapse-content">
                            <p>Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlertPage
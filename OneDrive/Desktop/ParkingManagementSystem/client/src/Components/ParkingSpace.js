import React from 'react'
import "../Styles/ParkingSpace.css"

const ParkingSpace = () => {
  return (
    <div className="mainContainerPrkingSpace">
    <div>
        <h1>Parking space</h1>
        </div>
        <div className='parkingSpaceContainer'>
            <div className='twoWheeler'>
                    <h2> 2 wheeler parking</h2>
                    <div>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                    </div>
            </div>

            <div className='threeWheeler'>
                    <h2> 3 wheeler parking</h2>
                    <div>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                    </div>
            </div>

            <div className='fourWheeler'>
                    <h2> 4 wheeler parking</h2>
                    <div>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                        <span>Available</span>
                    </div>
            </div>
        </div>
      
    </div>
   
  )
}

export default ParkingSpace
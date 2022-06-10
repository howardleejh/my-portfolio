import { useState } from 'react'
import { Button, Modal } from 'antd'
import './ExperienceCard.scss'

const ExperienceCard = (props) => {
  const [modalVisible, setModalVisible] = useState(false)

  const handleClick = () => {
    setModalVisible(true)
    return
  }

  return (
    <div className='exp-card'>
      <div className='exp-card-inner'>
        <div className='exp-card-front' style={props.frontStyle}>
          <section>
            <h1>{props.company}</h1>
          </section>
        </div>
        <div className='exp-card-back' style={props.backStyle}>
          <section>
            <h1>{props.jobTitle}</h1>
            <h4>{props.fromTo}</h4>
            <p>{props.jobDesc}</p>
            <Button type='ghost' onClick={handleClick} className='modal-btn'>
              Know More
            </Button>
          </section>
        </div>
      </div>
      <Modal
        title={`${props.jobTitle} - ${props.company}`}
        centered
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        width={1000}
        className='exp-modal'
        style={{ textAlign: 'justify' }}
      >
        {props.jobDescLong}
      </Modal>
    </div>
  )
}
export default ExperienceCard

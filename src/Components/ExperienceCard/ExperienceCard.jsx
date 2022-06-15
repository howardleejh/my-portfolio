import { useState } from 'react'
import { Button, Modal } from 'antd'
import { isMobile } from 'react-device-detect'
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
            <h2>{props.company}</h2>
          </section>
        </div>
        <div className='exp-card-back' style={props.backStyle}>
          <section>
            <h3>{props.jobTitle}</h3>
            <h4>{props.fromTo}</h4>
            <p>{props.jobDesc}</p>
            <Button type='ghost' onClick={handleClick} className='modal-btn'>
              Know More
            </Button>
          </section>
        </div>
      </div>
      <Modal
        width={isMobile ? null : 750}
        title={
          <strong>
            {props.jobTitle} - {props.company}
          </strong>
        }
        centered
        visible={modalVisible}
        cancelButtonProps={{ style: { display: 'none' } }}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        className='exp-modal'
        style={{ textAlign: 'justify' }}
      >
        {
          <>
            <strong>{props.fromTo}</strong>
            {props.jobDescLong}
          </>
        }
      </Modal>
    </div>
  )
}
export default ExperienceCard

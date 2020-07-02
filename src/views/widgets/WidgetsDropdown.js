import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'
let array1;
let appBook;
function countnumber(props){
  let patientArriveYes=0,patientArriveNo=0;
  let i=0;
  console.log(props.apiData)
  for(i=0;i<props.props.apiData.length();i++)
  { if(props.apiData.arrived=="With Doctor")
    appBook=appBook+1
    else if (props.apiData.arrived=="No")
    patientArriveNo=patientArriveNo+1
    else if(props.apiData.arrived=="Yes")
    patientArriveYes=patientArriveYes+1
  }
  array1[0]=appBook
  array1[1]=patientArriveNo
  array1[2]=patientArriveYes

  return array1

}

const WidgetsDropdown = (props) => {
  // render
  console.log(props.apiData)

  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header={props.apiData.length}
          text="Total Appointment Booked"
          footerSlot={
            <div></div>
          }
        >

        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header="15"
          text="Total Patient Arrived"
          footerSlot={
            <div></div>
          }
        >

        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header="10"
          text="Waiting to be Called In"
          footerSlot={
            <div></div>
          }
        >

        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header="6"
          text="Patient with Doctor"
          footerSlot={
            <div></div>
          }
        >

        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown

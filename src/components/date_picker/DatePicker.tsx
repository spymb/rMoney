import React, {CSSProperties, FC, useEffect, useState} from "react";
import PickerList from "./PickerList";
import styled from "styled-components";
import dayjs from "dayjs";

const Wrapper = styled.div`
  background-color: #fff
`
const Header = styled.div`
  padding: 6px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px #e0e0e0;

  > button {
    font-size: 16px;
    border: none;
    outline: none;
    background: transparent;
  }

  .cancel-btn {
    color: #9e9e9e;
  }

  .ok-btn {
    color: #42a5f5;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  > * {
    flex: 1;
  }
`

export type DatePickerType = 'year' | 'month' | 'date'

interface DatePickerProps {
  date: Date,
  pickerType: DatePickerType
  onOk: (date: Date) => void
  onCancel: () => void
  className?: string
  style?: CSSProperties
}

const DatePicker: FC<DatePickerProps> = (props) => {
  const {date: now, pickerType, onOk, onCancel, ...restProps} = props
  const [year, setYear] = useState(dayjs(now).year())
  const [month, setMonth] = useState(dayjs(now).month() + 1)
  const [date, setDate] = useState(dayjs(now).date())

  useEffect(() => {
    const bodyTouchMoveHandler = (e: TouchEvent) => {e.preventDefault()}

    document.body.addEventListener('touchmove', bodyTouchMoveHandler, {passive: false})

    return () => {document.body.removeEventListener('touchmove', bodyTouchMoveHandler)}
  }, [])

  let dateStr = ''
  if (pickerType === 'date') {
    dateStr = `${year}-${month}-${date}`
  }
  if (pickerType === 'month') {
    dateStr = `${year}-${month}`
  }
  if (pickerType === 'year') {
    dateStr = `${year}`
  }

  const onClickOk = () => {
    const fullDate = new Date(dayjs().year(year).month(month - 1).date(date).valueOf())
    onOk(fullDate)
  }
  const onClickCancel = () => {
    onCancel()
  }

  const showYear = pickerType === 'date' || pickerType === 'month' || pickerType === 'year'
  const showMonth = pickerType === 'date' || pickerType === 'month'
  const showDate = pickerType === 'date'

  const onYearChange = (val: string) => {
    setYear(parseInt(val))
  }
  const onMonthChange = (val: string) => {
    setMonth(parseInt(val))
  }
  const onDateChange = (val: string) => {
    setDate(parseInt(val))
  }

  const yearList = []
  for (let i = 0; i < 10; i++) {
    yearList.unshift(dayjs().year() - i + '')
  }
  const monthList = Array(12).fill(0).map((item, index) => index + 1 + '')
  const daysInMonth =  dayjs().year(year).month(month - 1).daysInMonth()
  const dateList =  Array(daysInMonth).fill(0).map((item, index) => index + 1 + '')

  return (
    <Wrapper {...restProps}>
      <Header>
        <button className="cancel-btn" onClick={onClickCancel}>取消</button>
        <header className="title">{dateStr}</header>
        <button className="ok-btn" onClick={onClickOk}>确定</button>
      </Header>

      <Container>
        {showYear && <PickerList onChange={onYearChange} value={year + ''} listData={yearList}/>}
        {showMonth && <PickerList onChange={onMonthChange} value={month + ''} listData={monthList}/>}
        {showDate && <PickerList onChange={onDateChange} value={date + ''} listData={dateList}/>}
      </Container>
    </Wrapper>
  )
}

export default DatePicker
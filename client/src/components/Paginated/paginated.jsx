import { useState } from 'react'
import { useSelector } from 'react-redux' 

export const Paginated = ({ data, itemsPerPage }) => {
  // const data = useSelector(state=>state.books.books)
  // const itemsPerPage = 3

  const pagesTotal = Math.ceil(data.length / itemsPerPage)

  const [currentPage, setCurrentPage] = useState(1)

  const firstItem = currentPage * itemsPerPage - itemsPerPage
  const lastItem = currentPage * itemsPerPage - 1

  //================= Estas lineas sirven para llevar al user a la pagina uno cuando
  //cambia algun filtro ==========================

  // const filterOn = useSelector(state=>state.filterOn)

  // useEffect(()=>{

  //     setCurrentPage(1)
  // },[filterOn])

  function handleClick(e) {
    if (e.target.value === 'next' && currentPage !== pagesTotal) {
      const next = currentPage + 1

      setCurrentPage(next)
    }
    if (e.target.value === 'previous' && currentPage !== 1) {
      const back = currentPage - 1

      setCurrentPage(back)
    }
  }
  function handlePage(e) {
    setCurrentPage(parseInt(e.target.value))
  }
  function handleFirst(e) {
    if (e.target.value === 'first') {
      setCurrentPage(1)
    } else {
      setCurrentPage(pagesTotal)
    }
  }

  const pages = []

  for (let i = 1; i <= pagesTotal; i++) {
    pages.push(i)
  }

  let itemsDisplay = []

  function display() {
    for (let i = firstItem; i <= lastItem; i++) {
      if (data.length < 1) {
        return (
          <div>
            <h3>No data to show</h3>
          </div>
        )
      }
      if (typeof data[i] != 'undefined') {
        itemsDisplay.push(
          //================== aca se generan los elementos a mostrar =====================
          <section key={data[i].id}>
            <h1>{data[i].title}</h1>
          </section>,
        )
      }
    }

    return itemsDisplay
  }
  return (
    <>
      <div>
        <div>
          <h4> Page {currentPage}</h4>
          {/================== aca es donde se renderizan ====================/}
          <section>{display()}</section>
        </div>
        <button value="first" onClick={handleFirst}>
          First
        </button>
        <button type="click" value="previous" onClick={(e) => handleClick(e)} />

        {pages.map((el) => {
          return (
            <button key={el} id={el} value={el} onClick={handlePage}>
              {el}
            </button>
          )
        })}

        <button value="next" onClick={(e) => handleClick(e)} />
        <button value="last" onClick={handleFirst}>
          Last
        </button>
      </div>
    </>
  )
}
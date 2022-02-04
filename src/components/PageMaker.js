import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BoardDataService from "../services/BoardService";

const PageMaker = () => {
    
    const [boards, setBoards] = useState([]);
    const [paging, setPaging] = useState({});

    useEffect(() => {
        retrieveBoards();
      }, []);

    const retrieveBoards = () => {    
      BoardDataService.getPagingList()
          .then(response => {
            setBoards(response.data.boards);
            setPaging(response.data.page);

            console.log(response.data.boards);
            console.log(response.data.page);
          })
          .catch(e => {
            console.log(e);
          });                
    };

    const onClickPaging = (e) => {    
      e.preventDefault();
      console.log(e.target.pathname);
      console.log(e.target.search);
      
      BoardDataService.getPagingList( e.target.pathname, e.target.search)
          .then(response => {
            setBoards(response.data.boards);
            setPaging(response.data.page);

            console.log(response.data.boards);
            console.log(response.data.page);
          })
          .catch(e => {
            console.log(e);
          });                
    };
    
    const deleteBoard =  e =>{
      const {name,value} = e.target;

      console.log(name);
      console.log(value);

      BoardDataService.remove(value)
      .then(response => {
        
        //console.log(response.data);    
        //console.log(value,boards.length);
        setBoards(boards.filter(board => board.bid !== parseInt(value)));        

      })
      .catch(e => {
        console.log(e);
      });     
    };

    console.log(paging);
    return (
       <div>

                {
                  paging.pre === true && <Link to={'/axios/list2' + '?pageNum=' + (paging.startPage -1) + '&' + 'amount=' + paging.cri.amount} onClick={onClickPaging}> 이전 </Link>
                }

                {(() => {
                    const row = [];
                    for (let i = paging.startPage; i < paging.endPage; i++) {
                      console.log('/list2/' + '?pageNum=' + i + '&' + 'amount=' + paging.cri.amount);
                      row.push( <Link to={'/axios/list2' + '?pageNum=' + i + '&' + 'amount=' + paging.cri.amount} onClick={onClickPaging}> { i }</Link>);                    
                    }
                    return row;
                  })()
                }

                {     
                  paging.next === true && (paging.endPage > 0) && <Link to={'/axios/list2' + '?pageNum=' + (paging.endPage +1) + '&' + 'amount=' + paging.cri.amount} onClick={onClickPaging}> 다음 </Link>
                }
      </div>

    );
};

export default PageMaker;
import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
const Fee = () => {
    return (<>

        <div className='Main-eligibility'>
            <div id='fee' className='eligibility-heading'>
                <h1>Entry Fee</h1>
            </div>

            <Table responsive>
                <thead>
                    <tr>
                        <th>
                        S.No.
                        </th>
                        <th>
                        Category
                        </th>
                        <th>
                        Age
                        </th>
                        <th>
                        Born on/after
                        </th>
                        <th>
                        Fee(in Rs.)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        1.
                        </td>
                        <td>
                        Men Team
                        </td>
                        <td>
                            --
                        </td>
                        <td>
                           --
                        </td>
                        <td>
                        <b>600.00</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                           2.
                        </td>
                        <td>
                        Women Team
                        </td>
                        <td>
                            --
                        </td>
                        <td>
                            --
                        </td>
                        <td>
                        <b>600.00</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            3.
                        </td>
                        <td>
                        Men
                        </td>
                        <td>
                           --
                        </td>
                        <td>
                            --
                        </td>
                        <td>
                        <b>300.00</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            4.
                        </td>
                        <td>
                        Women
                        </td>
                        <td>
                        --
                        </td>
                        <td>
                           --
                        </td>
                        <td>
                        <b>300.00</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            5.
                        </td>
                        <td>
                        Youth Boys  
                        </td>
                        <td>
                        Under 21 yrs.
                        </td>
                        <td>
                        Born on/after 1.1.1997
                        </td>
                        <td>
                        <b>300.00</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            6.
                        </td>
                        <td>
                        Youth Girls
                        </td>
                        <td>
                        Under 21 yrs.
                        </td>
                        <td>
                        Born on/after 1.1.1997
                        </td>
                        <td>
                        <b>300.00</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            7.
                        </td>
                        <td>
                        Boys
                        </td>
                        <td>
                        Under 18 yrs.
                        </td>
                        <td>
                        Born on/after 1.1.2000
                        </td>
                        <td>
                        <b>300.00</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            8.
                        </td>
                        <td>
                        Girls
                        </td>
                        <td>
                        Under 18 yrs.
                        </td>
                        <td>
                        Born on/after 1.1.2000
                        </td>
                        <td>
                        <b>300.00</b>
                        </td>
                    </tr>
                </tbody>
            </Table>

        </div>


    </>)
}

export default Fee
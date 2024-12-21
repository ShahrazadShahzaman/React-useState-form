const Table = ({userList})=> {
    return (
        <div>
            <table border={1}>
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                 </thead>
                 <tbody>
                     {userList.map((item, index) => {
                       return (
                        <tr key={item}>
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        </tr>
                       )
                })}
             </tbody>
            </table>
        </div>
    );
};
export default Table;

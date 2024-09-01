import React from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './styles.css';

const LawyerList = ({ lawyers, fetchLawyers, setCurrentLawyer, openModal }) => {
    const handleEdit = (lawyer) => {
        setCurrentLawyer(lawyer);
        openModal();
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5169/api/lawyers/${id}`);
            fetchLawyers();
        } catch (error) {
            console.error('Erro ao excluir advogado:', error);
        }
    };

    return (
        <div className="lawyer-list">
            <h2>Lista de Advogados</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Senioridade</th>
                        <th>Endereço</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {lawyers.map((lawyer) => (
                        <tr key={lawyer.id}>
                            <td>{lawyer.name}</td>
                            <td>{lawyer.seniority}</td>
                            <td>{`${lawyer.street}, ${lawyer.neighborhood} - ${lawyer.state}, ${lawyer.zipCode}`}</td>
                            <td className="table-actions">
                                <button onClick={() => handleEdit(lawyer)}><FaEdit className="edit-icon" /></button>
                                <button onClick={() => handleDelete(lawyer.id)}><FaTrash className="delete-icon" /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LawyerList;

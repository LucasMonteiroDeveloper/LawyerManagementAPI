import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import LawyerForm from './components/LawyerForm';
import LawyerList from './components/LawyerList';
import './components/styles.css';

const App = () => {
    const [lawyers, setLawyers] = useState([]);
    const [currentLawyer, setCurrentLawyer] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const fetchLawyers = async () => {
        try {
            const response = await axios.get('http://localhost:5169/api/lawyers');
            setLawyers(response.data);
        } catch (error) {
            console.error('Erro ao buscar advogados:', error);
        }
    };

    useEffect(() => {
        fetchLawyers();
    }, []);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setCurrentLawyer(null);
    };

    return (
        <div className="container">
            <h1>Gerenciamento de Advogados</h1>
            <ToastContainer />
            <LawyerList
                lawyers={lawyers}
                fetchLawyers={fetchLawyers}
                setCurrentLawyer={setCurrentLawyer}
                openModal={openModal}
            />
            {showModal && (
                <LawyerForm
                    fetchLawyers={fetchLawyers}
                    currentLawyer={currentLawyer}
                    setCurrentLawyer={setCurrentLawyer}
                    closeModal={closeModal}
                />
            )}
            <button className="open-modal-btn" onClick={openModal}>Adicionar Advogado</button>
        </div>
    );
};

export default App;

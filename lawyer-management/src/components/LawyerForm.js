import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';

const LawyerForm = ({ fetchLawyers, currentLawyer, setCurrentLawyer, closeModal }) => {
    const [lawyer, setLawyer] = useState({
        name: '',
        seniority: 'junior',
        street: '',
        neighborhood: '',
        state: 'SP',
        zipCode: '',
        number: '',
        complement: ''
    });

    useEffect(() => {
        if (currentLawyer) {
            setLawyer(currentLawyer);
        }
    }, [currentLawyer]);

    const validate = () => {
        const errors = [];

        if (!lawyer.name) {
            errors.push('O nome é obrigatório.');
        }

        if (!['junior', 'pleno', 'senior'].includes(lawyer.seniority)) {
            errors.push('Selecione uma senioridade válida.');
        }

        if (!lawyer.street) {
            errors.push('A rua é obrigatória.');
        }
        if (!lawyer.neighborhood) {
            errors.push('O bairro é obrigatório.');
        }

        if (!lawyer.state) {
            errors.push('O estado é obrigatório.');
        }

        if (!/^\d{5}-\d{3}$/.test(lawyer.zipCode)) {
            errors.push('O CEP deve estar no formato 99999-999.');
        }

        if (!lawyer.number || isNaN(lawyer.number)) {
            errors.push('O número é obrigatório e deve ser um valor numérico.');
        }

        return errors;
    };

    const handleChange = (e) => {
        setLawyer({ ...lawyer, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validate();

        if (errors.length > 0) {
            errors.forEach((error) => toast.error(error));
            return;
        }

        try {
            if (currentLawyer) {
                await axios.put(`http://localhost:5169/api/lawyers/${lawyer.id}`, lawyer);
            } else {
                await axios.post('http://localhost:5169/api/lawyers', lawyer);
            }

            fetchLawyers();
            setLawyer({
                name: '',
                seniority: 'junior',
                street: '',
                neighborhood: '',
                state: 'SP',
                zipCode: '',
                number: '',
                complement: ''
            });
            setCurrentLawyer(null);
            toast.success('Advogado salvo com sucesso!');
            closeModal();
        } catch (error) {
            console.error('Erro ao salvar advogado:', error);
            toast.error('Erro ao salvar advogado. Tente novamente.');
        }
    };

    const handleCancel = () => {
        closeModal();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="close" onClick={handleCancel}>×</button>
                <h2>{currentLawyer ? 'Editar Advogado' : 'Adicionar Advogado'}</h2>
                <form onSubmit={handleSubmit}>
                    <label>Nome:</label>
                    <input type="text" name="name" value={lawyer.name} onChange={handleChange} required />

                    <label>Senioridade:</label>
                    <select name="seniority" value={lawyer.seniority} onChange={handleChange} required>
                        <option value="junior">Júnior</option>
                        <option value="pleno">Pleno</option>
                        <option value="senior">Sênior</option>
                    </select>

                    <label>Endereço:</label>
                    <input type="text" name="street" value={lawyer.street} onChange={handleChange} placeholder="Rua" required />
                    <input type="text" name="neighborhood" value={lawyer.neighborhood} onChange={handleChange} placeholder="Bairro" required />

                    <label>Estado:</label>
                    <select name="state" value={lawyer.state} onChange={handleChange} required>
                        <option value="SP">São Paulo</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="RS">Rio Grande do Sul</option>
                    </select>

                    <label>CEP:</label>
                    <InputMask
                        mask="99999-999"
                        value={lawyer.zipCode}
                        onChange={handleChange}
                        name="zipCode"
                        required
                    />

                    <label>Número:</label>
                    <input type="text" name="number" value={lawyer.number} onChange={handleChange} required />

                    <label>Complemento:</label>
                    <input type="text" name="complement" value={lawyer.complement} onChange={handleChange} />

                    <div className="modal-footer">
                        <button type="submit">{currentLawyer ? 'Atualizar' : 'Adicionar'} Advogado</button>
                        <button type="button" className="cancel" onClick={handleCancel}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LawyerForm;

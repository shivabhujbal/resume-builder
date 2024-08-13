import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const EditButton = () => {
    return (
        <div className="flex space-x-6">
            
                <FontAwesomeIcon icon={faEdit} className="w-5 h-5" />
            
            
                <FontAwesomeIcon icon={faTrash} className="w-5 h-5" />
        
        </div>
    );
}

export default EditButton;

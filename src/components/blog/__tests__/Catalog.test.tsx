import { render, screen } from '@testing-library/react';
import BlogCatalog from '../Catalog';
import { MemoryRouter } from 'react-router-dom';
import { userEvent } from '@testing-library/user-event';

describe('Компонент BlogCatalog', () => {
    test('должен увеличивать количество карточек при клике на кнопку "Load more"', async () => {

        const user = userEvent.setup();

        render(
        <MemoryRouter>
            <BlogCatalog query='' baseQuantity={3} />
        </MemoryRouter>
    )
        const initialCards = screen.getAllByRole('heading', {level: 3});
        
        expect(initialCards.length).toBe(3);

        const loadMoreBtn = screen.getByRole('button', {name: /Load more/i});

        await user.click(loadMoreBtn);

        const updatedCards = screen.getAllByRole('heading', {level: 3});

        expect(updatedCards.length).toBe(6);
    });
});
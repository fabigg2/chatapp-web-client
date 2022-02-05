import { auth } from '../services/auth';

describe('auth test', () => {
    test('regular sign in - ok', async () => {
        const response = await auth.regularSignIn({ email: 'fabig4da@gmail.com', password: '1234' });
        const { ok, data } = response.data;
        expect(ok).toBeTruthy();
        expect(data).not.toBeNull();
        expect(data.user.email).toBe('fabig4da@gmail.com');
        expect(data.token).not.toBeNull()
    });
    test('regular sign in - wrong', async () => {
        try {
            const response = await auth.regularSignIn({ email: 'fabig4da@gmail.com', password: '123' });
        } catch ({response}) {
            const { ok, data } = response.data;
            expect(ok).toBeFalsy;
        }

    });

})
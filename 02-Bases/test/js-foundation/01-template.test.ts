import { emailTamplate } from "../../src/js-foundation/01-template";

describe('js-foundation/01-template', () => {
    test('emailTemplate should contain a greeting', () => {

        // Arrange
        const text = `
        <di>
            <h1>Hi, {{name}}</h1>
            <p>Thank you for your orders.</p>
        </div>
        `;

        // Act
        const result = emailTamplate;

        // Assert
        expect(result).toBe(text);
    });
});
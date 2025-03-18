import { chromium } from "playwright"
import { expect } from "@playwright/test";


(async () => {
    // Lanza el navegador y crea una nueva página
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Abre la aplicación de Task Manager
    await page.goto('http://localhost:5173'); // Asegúrate de que tu aplicación esté corriendo en este puerto

    // Verificar que la aplicación se carga correctamente
    const title = await page.title();
    console.log('Title:', title);
    if (title !== 'Task Manager') {
        console.log('El título no coincide, prueba fallida');
        await browser.close();
        return;
    }

    // Crear una nueva tarea
    await page.getByTestId('add-task-btn').click();
    await page.getByTestId('task-input').waitFor();
    await expect(page.getByTestId('task-input')).toBeVisible();
    await page.getByTestId("task-input").fill('Nueva tarea');
    const addButton = await page.getByTestId("submit-btn");
    await addButton.click();

    // Verificar que la tarea se ha agregado
    const taskText = await page.getByTestId("task-item").innerText();
    console.log('Task added:', taskText);
    if (taskText !== 'Nueva tarea') {
        console.log('La tarea no fue agregada correctamente, prueba fallida');
        await browser.close();
        return;
    }

    // Eliminar una tarea
    const deleteButton = await page.locator('button.delete:last-child'); // Cambia el selector si es necesario
    await deleteButton.click();

    // Verificar que la tarea se ha eliminado
    const taskCount = await page.locator('ul li').count();
    if (taskCount !== 0) {
        console.log('La tarea no fue eliminada correctamente, prueba fallida');
        await browser.close();
        return;
    }

    console.log('Test passed: Tarea agregada y eliminada correctamente.');

    // Cerrar el navegador
    await browser.close();
})();
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "test-ts" is now active!');

	function timeout(ms: number) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	vscode.speech.registerSpeechProvider('sample', {
		provideSpeechToTextSession: token => {
			const emitter = new vscode.EventEmitter<vscode.SpeechToTextEvent>();

			(async () => {
				await timeout(1000);
				emitter.fire({ status: vscode.SpeechToTextStatus.Started });

				await timeout(500);
				emitter.fire({ status: vscode.SpeechToTextStatus.Recognizing, text: 'Explain' });

				await timeout(500);
				emitter.fire({ status: vscode.SpeechToTextStatus.Recognizing, text: 'Explain the' });

				await timeout(500);
				emitter.fire({ status: vscode.SpeechToTextStatus.Recognizing, text: 'Explain the project' });

				await timeout(500);
				emitter.fire({ status: vscode.SpeechToTextStatus.Recognizing, text: 'Explain the project to' });

				await timeout(500);
				emitter.fire({ status: vscode.SpeechToTextStatus.Recognizing, text: 'Explain the project to me' });

				await timeout(500);
				emitter.fire({ status: vscode.SpeechToTextStatus.Recognized, text: 'Explain the project to me.' });

				await timeout(500);
				emitter.fire({ status: vscode.SpeechToTextStatus.Recognizing, text: 'And' });

				await timeout(500);
				emitter.fire({ status: vscode.SpeechToTextStatus.Recognizing, text: 'And how' });

				await timeout(500);
				emitter.fire({ status: vscode.SpeechToTextStatus.Recognizing, text: 'And how do' });

				await timeout(500);
				emitter.fire({ status: vscode.SpeechToTextStatus.Recognizing, text: 'And how do you' });

				await timeout(500);
				emitter.fire({ status: vscode.SpeechToTextStatus.Recognizing, text: 'And how do you debug' });

				await timeout(500);
				emitter.fire({ status: vscode.SpeechToTextStatus.Recognized, text: 'And how do you debug?' });
			})();

			return {
				onDidChange: emitter.event,
				dispose: () => { }
			}
		}
	});
}

export function deactivate() { }

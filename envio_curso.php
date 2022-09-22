<?php
$data = file_get_contents('php://input');
$data = json_decode($data, true);

$nome_curso = $data['nome_curso'];
$email_curso = $data['email_curso'];
$telefone_curso = $data['telefone_curso'];
$tipo_curso = $data['tipo_curso'];
$mensagem_curso = $data['mensagem_curso'];

$toEmail = "gabrielcamurcaaa10@gmail.com";
$email_send = "excellence@contato.com";
$showMessage = '';


$subject = "Inscrição do curso EXCELLENCE Detetives";
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-utf-8' . "\r\n";
$headers .= 'From: ' . 'EXCELLENCE Detetives ' .$email_send."\r\n".
'Reply-To: '.$email."\r\n" .
'X-Mailer: PHP/' . phpversion();
$message = 'Olá,<br/><br/> Você recebeu uma inscrição para o curso de detective do site EXCELLENCE DETECTIVES. Confira abaixo os detalhes da inscrição do aluno: <br/><br/>'
. '<b>Nome:</b>      ' . $nome_curso . '<br/>'	
. '<b>E-mail:</b>    ' . $email_curso . '<br/>'
. '<b>Telefone:</b>  ' . $telefone_curso . '<br/>'
. '<b>Modelo do curso:</b> ' . $tipo_curso . '<br/>'
. '<b>Mensagem:</b>  ' . $mensagem_curso . '<br/><br/>';

mail($toEmail, $subject, $message, $headers);
$showMessage = "Mensagem enviada com sucesso em breve entraremos em contacto";

$jsonData = array(
	"message"	=> $showMessage
);
echo json_encode($jsonData); 
?>
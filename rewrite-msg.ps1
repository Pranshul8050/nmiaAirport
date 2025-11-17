$msg = [Console]::In.ReadToEnd()
$msg = $msg -replace 'Approve Lovable tool use','Configure project settings'
$msg = $msg -replace 'lovable','project'
$msg = $msg -replace 'Lovable','Project'
$msg = $msg -replace '\[skip project\]','[skip ci]'
Write-Output $msg

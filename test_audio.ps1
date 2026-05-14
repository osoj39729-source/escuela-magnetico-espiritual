Add-Type -TypeDefinition @"
using System;
using System.Runtime.InteropServices;

public class Audio {
    [DllImport("user32.dll")]
    public static extern IntPtr SendMessageW(IntPtr hWnd, int Msg, IntPtr wParam, IntPtr lParam);
}
"@

# Toggle mute to see if it works
[Audio]::SendMessageW(0xffff, 0x0319, 0, 0x80000) # Volume Mute
Write-Host "Mute toggled. Checking status..."
